import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import type { JWT } from 'google-auth-library';

const SPREADSHEET_ID = '1ncvHbbkQiELMh-ykTjDnJHtt21T29uD084_gY5V1y5U';
const SHEET_NAME = 'Bookings';

const authClient = new google.auth.GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: 'srv-detailing-488812',
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL || 'srv-detailing@srv-detailing-488812.iam.gserviceaccount.com',
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// PUT → update booking status
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await request.json();
    
    if (!status) {
      return NextResponse.json(
        { success: false, message: 'Status is required' },
        { status: 400 }
      );
    }

    // First, get all bookings to find the row that matches the booking
    const client = await authClient.getClient() as JWT;
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:I`,
    });

    const rows = response.data.values || [];
    
    // Extract the row index from the params.id (which is in format booking_row_number)
    const { id } = await params;
    const parts = id.split('_');
    let rowIndex = -1;
    
    if (parts.length >= 3 && parts[0] === 'booking' && parts[1] === 'row') {
      const rowNumber = parseInt(parts[2]);
      
      // Validate that the row number corresponds to an actual row in our data
      if (!isNaN(rowNumber) && rowNumber >= 2) {  // Row numbers start from 2
        const actualRowIndex = rowNumber - 2;  // Convert back to 0-based index for our rows array
        
        if (actualRowIndex < rows.length) {
          rowIndex = rowNumber;  // This is the actual row number in the spreadsheet
        }
      }
    }
    
    if (rowIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 }
      );
    }

    // Update the status in the specific cell (column J is the 10th column, index 9, since we added address)
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!J${rowIndex}`, // Column J is the status column
      valueInputOption: 'RAW',
      requestBody: {
        values: [[status]]
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking status updated successfully' 
    });
  } catch (error: any) {
    console.error('Failed to update booking status:', error);
    
    // Check if it's a permission error
    if (error.status === 403) {
      return NextResponse.json(
        { success: false, message: 'Permission denied. Please check if the Google Sheet is shared with the service account.' },
        { status: 403 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to update booking status: ' + error.message },
      { status: 500 }
    );
  }
}

// DELETE → delete a booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // First, get all bookings to find the row that matches the booking
    const client = await authClient.getClient() as JWT;
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:I`,
    });

    const rows = response.data.values || [];
    
    // Extract the row index from the params.id (which is in format booking_row_number)
    const { id } = await params;
    const parts = id.split('_');
    let rowIndex = -1;
    
    if (parts.length >= 3 && parts[0] === 'booking' && parts[1] === 'row') {
      const rowNumber = parseInt(parts[2]);
      
      // Validate that the row number corresponds to an actual row in our data
      if (!isNaN(rowNumber) && rowNumber >= 2) {  // Row numbers start from 2
        const actualRowIndex = rowNumber - 2;  // Convert back to 0-based index for our rows array
        
        if (actualRowIndex < rows.length) {
          rowIndex = rowNumber;  // This is the actual row number in the spreadsheet
        }
      }
    }
    
    if (rowIndex === -1) {
      return NextResponse.json(
        { success: false, message: 'Booking not found' },
        { status: 404 }
      );
    }

    // Delete the row by clearing it and then shifting rows up
    // Google Sheets API doesn't have a direct delete row method, so we need to:
    // 1. Clear the entire row
    // 2. Get all rows after this one
    // 3. Move them up by one row
    
    // Clear the row first
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A${rowIndex}:I${rowIndex}`,
    });

    // Get all data from the sheet again to reorganize
    const fullResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:I`,
    });

    const allRows = fullResponse.data.values || [];
    
    // Remove the empty row (the one we just cleared)
    const updatedRows = allRows.filter((_row: any[], idx: number) => {
      // Row index in allRows is rowIndex - 1 because allRows includes header
      return idx !== (rowIndex - 1);
    });

    // Clear the entire sheet and rewrite with updated rows
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:I`,
    });

    // Write back all rows except the deleted one
    if (updatedRows.length > 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: updatedRows
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Booking deleted successfully' 
    });
  } catch (error: any) {
    console.error('Failed to delete booking:', error);
    
    // Check if it's a permission error
    if (error.status === 403) {
      return NextResponse.json(
        { success: false, message: 'Permission denied. Please check if the Google Sheet is shared with the service account.' },
        { status: 403 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to delete booking: ' + error.message },
      { status: 500 }
    );
  }
}