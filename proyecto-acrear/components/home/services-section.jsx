'use client';
import Link from 'next/link';

const services = [
  {
    title: 'SERVICIOS AL SECTOR PÚBLICO',
    description:
      'Brindamos herramientas técnicas y estratégicas para fortalecer la gestión provincial y municipal, potenciando capacidades locales e integrando a las regiones en el comercio global.',
    href: '/servicios',
  },
  {
    title: 'SERVICIOS AL SECTOR PRIVADO',
    description:
      'Impulsamos a las empresas hacia la internacionalización, con soluciones concretas en representación, exportación, servicios aduaneros y expansión comercial.',
    href: '/servicios',
  },
  {
    title: 'VINCULACIÓN PÚBLICO-PRIVADA',
    description:
      'Creamos un espacio activo de diálogo y colaboración para diseñar políticas comerciales eficaces que conecten al Estado con el entramado productivo regional.',
    href: '/servicios',
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 px-4 bg-[var(--color-background)] text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-12">SERVICIOS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[var(--color-secondary)] text-white rounded-xl p-6 flex flex-col items-center shadow-md transition hover:scale-[1.02]"
          >
            {/* Ícono SVG inline */}
            <div className="mb-4 text-[var(--color-accent)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <h3 className="font-bold text-lg mb-4">{service.title}</h3>
            <p className="text-sm mb-6">{service.description}</p>

            <Link href={service.href}>
              <button className="bg-[var(--color-accent)] hover:brightness-90 text-white font-semibold px-6 py-2 rounded-full transition-all">
                Ver más
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
