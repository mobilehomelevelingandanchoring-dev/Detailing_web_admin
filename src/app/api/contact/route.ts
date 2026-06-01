import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import type { JWT } from 'google-auth-library';

const SPREADSHEET_ID = '1D9ZQRGQ1fs90XepFzLit6T3N0AtoeWZKyW16_0iI7zc';
const SHEET_NAME = 'ContactMessages';

const authClient = new google.auth.GoogleAuth({
  credentials: {
    type: 'service_account',
    project_id: 'srv-detailing-488818',
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email:
      process.env.GOOGLE_CLIENT_EMAIL ||
      'srv-detailing@srv-detailing-488818.iam.gserviceaccount.com',
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const client = (await authClient.getClient()) as JWT;
    const sheets = google.sheets({ version: 'v4', auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[new Date().toISOString(), name.trim(), email.trim(), message.trim()]],
      },
    });

    return NextResponse.json({ success: true, message: 'Message received — we will be in touch shortly.' });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please call us on 07375 759686.' },
      { status: 500 },
    );
  }
}
