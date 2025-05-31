'use client';


import { LocationOn } from '@mui/icons-material';


export default function ContactInfo({ className = '', contactData }) {
  
  const offices = [...contactData.locations];

  return (
    <div className={`${className}  rounded-xl shadow-lg p-8 flex flex-col gap-8`}>
      <h3 className=" md:text-xl font-bold text-[var(--color-accent)]">
        {contactData.contactInfo}
      </h3>

      {offices.map((o) => (
        <div key={o.title} className="flex items-start gap-4">
          <LocationOn fontSize="large" className="text-[var(--color-primary)] mt-1" />
          <div>
            <p className="font-semibold text-[var(--color-primary)]">
              {o.title}
            </p>
            <p className="text-[var(--color-primary)] text-sm">{o.address}</p>
            <p className="text-[var(--color-primary)] text-sm">{o.phone}</p>
          </div>
        </div>
      ))}
    </div>
);
}
