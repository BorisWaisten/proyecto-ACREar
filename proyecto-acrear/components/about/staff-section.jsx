'use client';
import Image from 'next/image';

const authorities = [
  { name: 'Pablo Rico', role: 'Presidente', avatar: '/fotos/ejecutivo.png' },
  { name: 'Samira Manzur', role: 'Vicepresidenta', avatar: '/fotos/ejecutivo.png' },
  { name: 'Eugenia Neder', role: 'Secretaria', avatar: '/fotos/ejecutivo.png' },
  { name: 'Esteban Cordiviola', role: 'Tesorero', avatar: '/fotos/ejecutivo.png' },
  { name: 'Laila Abbas', role: 'Miembro', avatar: '/fotos/ejecutivo.png' },
];

const team = [
  { name: 'Julia Domínguez', role: 'Técnico', avatar: '/fotos/ejecutivo.png' }
];

function Card({ name, role, avatar }) {
  return (
    <div className="bg-[var(--color-accent)] rounded-2xl flex flex-col items-center text-white p-6 max-w-xs w-full shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="rounded-full bg-white p-1 mb-4"
      />
      <h4 className="font-semibold text-lg text-center">{name}</h4>
      <p className="text-sm text-center mt-1">{role}</p>
    </div>
  );
}

export default function StaffSection() {
  return (
    <section className="bg-[var(--color-background)] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Autoridades */}
      <div>
        <h3 className="text-2xl font-bold text-[var(--color-primary)] text-center mb-8">
          AUTORIDADES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {authorities.map((person, i) => (
            <Card key={i} {...person} />
          ))}
        </div>
      </div>

      {/* Equipo Técnico */}
      <div>
        <h3 className="text-2xl font-bold text-[var(--color-primary)] text-center mb-8">
          EQUIPO TÉCNICO
        </h3>
        <div className="grid grid-cols-1 gap-8 justify-items-center">
          {team.map((person, i) => (
            <Card key={i} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
