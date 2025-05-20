'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/data/section/contact';

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: t.emailSubject,
          text: message,
        }),
      });
      const json = await res.json();
      setStatus(json.id ? t.emailSentSuccess : t.emailSentError);
    } catch {
      setStatus(t.emailSentError);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="bg-[var(--color-terciary)] rounded-lg shadow-lg p-8 flex-1">
      <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-6">{t.title}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-[var(--color-primary)] font-semibold mb-1">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[var(--color-primary)] font-semibold mb-1">
            {t.message}
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.messagePlaceholder}
            className="w-full px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-[var(--color-primary)] text-white py-2 rounded-lg hover:bg-[var(--color-secondary)] transition"
        >
          {t.sendMessage}
        </button>
        {status && <p className="mt-4 text-[var(--color-primary)]">{status}</p>}
      </form>
    </div>
  );
}
