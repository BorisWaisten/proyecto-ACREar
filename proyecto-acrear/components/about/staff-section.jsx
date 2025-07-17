'use client';
import Image from 'next/image';

function Card({ name, role, avatar }) {
  return (
    <div className="bg-[var(--color-accent)] rounded-2xl flex flex-col items-center text-white h-full p-6 max-w-[230px] w-full shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="rounded-xl object-contain w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] bg-[var(--color-primary)] p-1 mb-4"
      />
      <h4 className="font-semibold text-base md:text-lg text-center">{name}</h4>
      <p className="text-xs md:text-sm w-full h-[30px] text-center text-[var(--color-primary)] mt-1">{role}</p>
    </div>
  );
}

export default function StaffSection({ about }) {
  // Orden de autoridades: presidente, secretaria, tesorero, vocal1, vocal2
  const authorities = about.authorities;
  
  // Crear la pirámide invertida
  const topRow = [authorities[1], authorities[0], authorities[2]]; // secretaria, presidente, tesorero
  const bottomRow = [authorities[3], authorities[4]]; // vocal1, vocal2

  return (
    <section className="bg-[var(--color-secondary)] py-12 space-y-12">
      
      {/* Autoridades */}
      <div>
        <h3 className="text-base md:text-xl font-bold text-[var(--color-accent)] text-center mb-8">
          {about.authoritiesTitle}
        </h3>
        
        {/* Fila superior: secretaria | presidente | tesorero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center px-2 sm:px-4 md:px-8 lg:px-30 gap-8 sm:gap-0 mb-8">
          {topRow.map((person, i) => (
            <Card key={`top-${person.name}-${i}`} {...person} />
          ))}
        </div>
        
        {/* Fila inferior centrada: vocal1 | vocal2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:px-8 lg:px-8 gap-8 sm:gap-0 max-w-[600px] mx-auto">
          {bottomRow.map((person, i) => (
            <Card key={`bottom-${person.name}-${i}`} {...person} />
          ))}
        </div>
      </div>

    </section>
  );
}
