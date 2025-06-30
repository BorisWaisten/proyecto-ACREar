'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function Card({ name, role, avatar }) {
  return (
    <div className="bg-[var(--color-accent)] rounded-2xl flex flex-col items-center text-white h-full p-6 max-w-xs w-full shadow-md hover:scale-105 transition-transform duration-300">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="rounded-xl w-[200px] h-[200px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] bg-[var(--color-primary)] p-1 mb-4"
      />
      <h4 className="font-semibold text-base md:text-lg text-center">{name}</h4>
      <p className=" text-xs md:text-sm w-full h-[30px] text-center text-[var(--color-primary)]  mt-1">{role}</p>
    </div>
  );
}

export default function StaffSection({ about }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Función para reorganizar autoridades para desktop
  const getAuthoritiesOrder = () => {
    if (isMobile) {
      // En móvil mantenemos el orden original
      return about.authorities;
    }

    // En desktop y tablet reorganizamos para poner al presidente en la segunda posición
    const president = about.authorities.find(person => 
      person.role.toLowerCase().includes('president') || person.role.toLowerCase().includes('presidente')
    );
    
    const others = about.authorities.filter(person => 
      !person.role.toLowerCase().includes('president') && !person.role.toLowerCase().includes('presidente')
    );

    // Insertamos al presidente en la segunda posición (índice 1)
    // Desktop (4 cols): [autoridad 1] [PABLO RICO] [autoridad 3] [autoridad 4]
    // Tablet (3 cols):  [autoridad 1] [PABLO RICO] [autoridad 3]
    const result = [...others];
    result.splice(1, 0, president); // Inserta el presidente en la posición 2 (índice 1)

    return result.filter(Boolean);
  };

  // Divide un array en chunks de tamaño n
  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const authoritiesOrdered = getAuthoritiesOrder();
  const authoritiesRows = chunkArray(authoritiesOrdered, 4);
  const teamRows = chunkArray(about.team, 4);

  return (
    <section className="bg-[var(--color-secondary)] py-16 space-y-12">
      
      {/* Autoridades */}
      <div>
        <h3 className="text-base md:text-xl font-bold text-[var(--color-accent)] text-center mb-8">
          {about.authoritiesTitle}
        </h3>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 px-2 sm:px-4 md:px-8 lg:px-8 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Primera fila */}
          {authoritiesRows[0] && authoritiesRows[0].map((person, i) => (
            <Card key={`${person.name}-row1-${i}`} {...person} />
          ))}
          {/* Segunda fila centrada si hay menos de 4 en desktop */}
          {authoritiesRows[1] && authoritiesRows[1].length < 4 ? (
            <>
              {/* Mobile/tablet: render directo, Desktop: centrado */}
              <div className="hidden lg:flex lg:col-span-4 lg:justify-center lg:gap-8 lg:w-[460px] xl:w-[600px]" style={{gridColumn: '1 / -1'}}>
                {authoritiesRows[1].map((person, i) => (
                  <Card key={`${person.name}-row2-lg-${i}`} {...person} />
                ))}
              </div>
              {authoritiesRows[1].map((person, i) => (
                <div key={`${person.name}-row2-sm-${i}`} className="lg:hidden w-full flex justify-center">
                  <Card {...person} />
                </div>
              ))}
            </>
          ) : (
            authoritiesRows[1] && authoritiesRows[1].map((person, i) => (
              <Card key={`${person.name}-row2-${i}`} {...person} />
            ))
          )}
          {/* Si hay más filas, renderizarlas normalmente */}
          {authoritiesRows.slice(2).flat().map((person, i) => (
            <Card key={`${person.name}-rowX-${i}`} {...person} />
          ))}
        </div>
      </div>

      {/* Equipo Técnico */}
      <div>
        <h3 className=" text-base md:text-xl font-bold text-[var(--color-accent)] text-center mb-8">
          {about.teamTitle}
        </h3>
        <div className="flex flex-col items-center gap-8 w-full h-[300px] lg:flex-row lg:justify-center lg:gap-8 lg:w-[460px] xl:w-[600px] mx-auto">
          {about.team.map((person, i) => (
            <Card key={`team-${person.name}-${i}`} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
