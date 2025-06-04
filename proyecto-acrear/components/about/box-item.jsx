'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

export default function BoxItem({ title, text }) {
  return (
    <div className="border rounded-xl p-6 shadow-md bg-white flex flex-col gap-3 animate-fade-in">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faBullseye} className="text-[var(--color-accent)] text-xl" />
        <h3 className="text-lg font-bold text-[var(--color-primary)]">{title}</h3>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}
