'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/data/section/contact';
import { LocationOn } from '@mui/icons-material';

const offices = [
  { labelKey: 'sedeCaba', address: 'Av. Siempre Viva 123, CABA', phone: '+54 11 1234-5678' },
  { labelKey: 'sedeSantaFe', address: 'Bv. Gálvez 456, Santa Fe',    phone: '+54 342 234-5678' },
  { labelKey: 'sedeSgo',    address: 'Salta 789, Santiago del Estero',phone: '+54 385 345-6789' },
];

export default function ContactInfo({ className = '' }) {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.es;

  return (
    <div className={`${className}  rounded-xl shadow-lg p-8 flex flex-col gap-8`}>
      <h3 className=" md:text-xl font-bold text-[var(--color-accent)]">
        {t.contactInfo}
      </h3>

      {offices.map((o) => (
        <div key={o.labelKey} className="flex items-start gap-4">
          <LocationOn fontSize="large" className="text-[var(--color-primary)] mt-1" />
          <div>
            <p className="font-semibold text-[var(--color-primary)]">
              {t[o.labelKey]}
            </p>
            <p className="text-[var(--color-primary)] text-sm">{o.address}</p>
            <p className="text-[var(--color-primary)] text-sm">{o.phone}</p>
          </div>
        </div>
      ))}
    </div>
);
}
