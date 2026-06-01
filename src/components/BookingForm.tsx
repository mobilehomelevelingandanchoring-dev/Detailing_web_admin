'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

// Compiled once at module level — not recreated on every render/keystroke
const PHONE_REGEX = /^(\+44|0)[1-9]\d{8,9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICES = [
  { value: '', label: 'Select a service' },
  { value: 'Full Valet', label: 'Full Valet - £60' },
  { value: 'Mini Valet', label: 'Mini Valet - £40' },
  { value: 'Car Detailing', label: 'Car Detailing - £120' },
  { value: 'Interior Valeting', label: 'Interior Valeting - £50' },
  { value: 'Exterior Valeting', label: 'Exterior Valeting - £45' },
  { value: 'Engine Bay Detailing', label: 'Engine Bay Detailing - £80' },
  { value: 'Ceramic Coating', label: 'Ceramic Coating - £300' },
  { value: 'Paint Correction', label: 'Paint Correction - £250' },
  { value: 'Headlight Restoration', label: 'Headlight Restoration - £40' },
  { value: 'Leather Conditioning', label: 'Leather Conditioning - £70' },
  { value: 'Odour Removal', label: 'Odour Removal - £60' },
  { value: 'Pet Hair Removal', label: 'Pet Hair Removal - £50' },
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
];

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// Manual formatter — no Intl.DateTimeFormat so output is identical on server and client
function fmtDate(d: Date): string {
  return `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Client-only — never called during SSR, so no hydration mismatch possible.
// new Date() can safely differ between server and client at midnight boundaries;
// running it only in the browser avoids that edge case entirely.
function buildAvailableDates(): { iso: string; display: string }[] {
  const dates: { iso: string; display: string }[] = [];
  const today = new Date();
  for (let i = 0; i < 15; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) {
      const iso = [
        d.getFullYear(),
        String(d.getMonth() + 1).padStart(2, '0'),
        String(d.getDate()).padStart(2, '0'),
      ].join('-');
      dates.push({ iso, display: fmtDate(d) });
    }
  }
  return dates;
}

const INITIAL_FORM: FormData = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  notes: '',
};

const BookingForm = () => {
  const router = useRouter();
  const redirectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lazy initializer runs only in the browser — eliminates the hydration mismatch
  // caused by date/locale differences between Node.js SSR and the browser.
  const [availableDates, setAvailableDates] = useState<{ iso: string; display: string }[]>([]);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Populate dates after mount — client-only, prevents hydration mismatch
  useEffect(() => {
    setAvailableDates(buildAvailableDates());
  }, []);

  // Cleanup redirect timer on unmount
  useEffect(() => {
    return () => {
      if (redirectTimer.current) clearTimeout(redirectTimer.current);
    };
  }, []);

  // Validate a single field — used both on blur and on full submit
  const validateField = useCallback((name: keyof FormData, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Full name is required';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        return PHONE_REGEX.test(value.replace(/\s/g, ''))
          ? ''
          : 'Please enter a valid UK phone number (e.g. 07123 456789)';
      case 'email':
        if (!value.trim()) return 'Email is required';
        return EMAIL_REGEX.test(value) ? '' : 'Please enter a valid email address';
      case 'service':
        return value ? '' : 'Please select a service';
      case 'date':
        return value ? '' : 'Please select a date';
      case 'time':
        return value ? '' : 'Please select a time';
      default:
        return '';
    }
  }, []);

  // Single state update per keystroke — functional updater avoids stale closure
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Only re-validate if this field has already been touched (blur-first strategy)
      if (touched[name as keyof FormData]) {
        const msg = validateField(name as keyof FormData, value);
        setErrors((prev) => ({ ...prev, [name]: msg }));
      }
    },
    [touched, validateField],
  );

  // Mark field as touched and validate immediately on blur
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const msg = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: msg }));
    },
    [validateField],
  );

  const validateAll = useCallback((): boolean => {
    const newErrors: Partial<FormData> = {};
    (Object.keys(INITIAL_FORM) as (keyof FormData)[]).forEach((key) => {
      const msg = validateField(key, formData[key]);
      if (msg) newErrors[key] = msg;
    });
    setErrors(newErrors);
    // Mark all fields touched so errors show
    setTouched(
      (Object.keys(INITIAL_FORM) as (keyof FormData)[]).reduce(
        (acc, k) => ({ ...acc, [k]: true }),
        {},
      ),
    );
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          status: 'Pending',
          createdAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData(INITIAL_FORM);
        redirectTimer.current = setTimeout(() => {
          router.push('/booking/success');
        }, 2000);
      } else {
        setSubmitError(result.message || 'An error occurred while processing your booking.');
      }
    } catch {
      setSubmitError('Failed to submit booking. Please try again or call us on 07375 759686.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Received!</h2>
        <p className="text-gray-600 mb-6">
          Thank you — we&apos;ll review your request and confirm your appointment shortly.
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-[#0A5A3B] text-white rounded-lg hover:bg-[#084830] transition-colors duration-200 font-medium"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const fieldClass = (name: keyof FormData) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] transition-colors ${
      errors[name] && touched[name] ? 'border-red-500 bg-red-50' : 'border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="name"
            className={fieldClass('fullName')}
            placeholder="Enter your full name"
            aria-required="true"
            aria-describedby={errors.fullName && touched.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && touched.fullName && (
            <p id="fullName-error" role="alert" className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass('phone')}
            placeholder="07123 456789"
            aria-required="true"
            aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
          />
          {errors.phone && touched.phone && (
            <p id="phone-error" role="alert" className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            inputMode="email"
            className={fieldClass('email')}
            placeholder="your@email.com"
            aria-required="true"
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
          />
          {errors.email && touched.email && (
            <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Select Service <span aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('service')}
            aria-required="true"
            aria-describedby={errors.service && touched.service ? 'service-error' : undefined}
          >
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          {errors.service && touched.service && (
            <p id="service-error" role="alert" className="mt-1 text-sm text-red-600">{errors.service}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date <span aria-hidden="true">*</span>
          </label>
          <select
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('date')}
            aria-required="true"
            aria-describedby={errors.date && touched.date ? 'date-error' : undefined}
          >
            <option value="">Select a date</option>
            {availableDates.map(({ iso, display }) => (
              <option key={iso} value={iso}>{display}</option>
            ))}
          </select>
          {errors.date && touched.date && (
            <p id="date-error" role="alert" className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time <span aria-hidden="true">*</span>
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('time')}
            aria-required="true"
            aria-describedby={errors.time && touched.time ? 'time-error' : undefined}
          >
            <option value="">Select a time</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && touched.time && (
            <p id="time-error" role="alert" className="mt-1 text-sm text-red-600">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A5A3B] focus:border-[#0A5A3B] transition-colors"
          placeholder="Car make/model, special requests, access instructions…"
        />
      </div>

      {/* Submission error */}
      {submitError && (
        <div role="alert" className="rounded-md bg-red-50 border border-red-200 p-4 flex gap-3">
          <svg className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-red-800">{submitError}</p>
        </div>
      )}

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-4 px-6 rounded-lg text-sm font-semibold text-white bg-[#0A5A3B] hover:bg-[#084830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A3B] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending your booking…
            </>
          ) : (
            'Confirm Booking Request'
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By submitting you agree to our terms. A confirmation will be sent to your email shortly.
      </p>
    </form>
  );
};

export default BookingForm;
