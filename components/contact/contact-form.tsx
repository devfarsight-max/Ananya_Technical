'use client';
import { useId, useState } from 'react';
export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  const [error, setError] = useState('');
  const feedbackId = useId();
  const field =
    'mt-2 w-full rounded border border-[#FAF7EF]/35 bg-[#FAF7EF]/5 px-4 py-3 text-[#FAF7EF] outline-none placeholder:text-[#FAF7EF]/60 focus:border-[#FAF7EF] focus:ring-1 focus:ring-[#FAF7EF]';
  const submit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => {
      const entry = data.get(key);
      return typeof entry === 'string' ? entry.trim() : '';
    };
    const phone = value('phone').replace(/[\s()-]/g, '');
    if (!/^(?:\+91)?[6-9]\d{9}$/.test(phone)) {
      setError(
        'Please enter a valid 10-digit Indian mobile number, with an optional +91 prefix.',
      );
      setPrepared(false);
      return;
    }
    setError('');
    const subject = 'ATS enquiry: ' + value('service');
    const body = [
      'Name: ' + value('name'),
      'Email: ' + value('email'),
      'Phone: ' + value('phone'),
      'Interest: ' + value('service'),
      '',
      'Message:',
      value('message'),
    ].join('\n');
    window.location.href =
      'mailto:info@atspvl.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
    setPrepared(true);
  };
  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Your name">
        <input
          name="name"
          autoComplete="name"
          required
          className={field}
          placeholder="Full name"
        />
      </Field>
      <Field label="Email address">
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className={field}
          placeholder="Your email address"
        />
      </Field>
      <Field label="Mobile number">
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className={field}
          placeholder="10-digit mobile number"
          aria-describedby={error ? feedbackId : undefined}
        />
      </Field>
      <Field label="Area of interest">
        <select name="service" required defaultValue="" className={field}>
          <option value="" disabled className="text-[#681321]">
            Choose an area
          </option>
          {[
            'Educational Studies',
            'Performing Arts',
            'Technological Studies (coming soon)',
            'Educational guidance',
            'Other enquiry',
          ].map((option) => (
            <option className="text-[#681321]" key={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Your message" className="sm:col-span-2">
        <textarea
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us about your interests and learning goals."
        />
      </Field>
      <button className="w-fit rounded bg-[#FAF7EF] px-6 py-3.5 font-bold text-[#681321] hover:bg-brand-soft">
        Prepare email enquiry
      </button>
      <p className="text-sm leading-6 text-[#FAF7EF]/80">
        Opens your email app. Review your message and send it from there.
      </p>
      {error && (
        <p role="alert" id={feedbackId} className="sm:col-span-2 text-sm">
          {error}
        </p>
      )}
      {prepared && (
        <output className="sm:col-span-2 text-sm leading-6">
          Your email draft is ready to open. If no email app opens, send your
          enquiry directly to info@atspvl.com. Your message is only sent when
          you send it from your email app.
        </output>
      )}
    </form>
  );
}
function Field({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}
