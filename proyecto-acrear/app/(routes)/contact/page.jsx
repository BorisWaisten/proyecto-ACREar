'use client';
import ContactInfo from '@/components/contact/contact-info';
import ContactForm from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] italic mb-12">
        Contáctanos
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
        <ContactInfo className="flex-1" />
        <ContactForm className="flex-1" />
      </div>
    </div>
  );
}
