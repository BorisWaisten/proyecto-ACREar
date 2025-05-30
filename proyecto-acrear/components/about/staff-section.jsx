'use client';
import Image from 'next/image';

function Card({ name, role, avatar }) {
  return (
    <div className="bg-[var(--color-accent)] rounded-2xl flex flex-col items-center text-white p-6 max-w-xs w-full shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="rounded-full bg-[var(--color-primary)] p-1 mb-4"
      />
      <h4 className="font-semibold text-lg text-center">{name}</h4>
      <p className="text-sm text-center text-[var(--color-primary)] mt-1">{role}</p>
    </div>
  );
}

export default function StaffSection({ about }) {
  return (
    <section className="bg-[var(--color-secondary)] py-16     space-y-12">
      
      {/* Autoridades */}
      <div>
        <h3 className="text-2xl font-bold text-[var(--color-accent)] text-center mb-8">
          {about.authoritiesTitle}
        </h3>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 px-2 sm:px-4 md:px-8 lg:px-8 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {about.authorities.map((person, i) => (
            <Card key={i} {...person} />
          ))}
        </div>
      </div>

      {/* Equipo Técnico */}
      <div>
        <h3 className="text-2xl font-bold text-[var(--color-accent)] text-center mb-8">
          {about.teamTitle}
        </h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-0 md:w-[50%] justify-items-center md:mx-auto">
          {about.team.map((person, i) => (
            <Card key={i} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
