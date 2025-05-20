'use client';
export default function PublicSectorServices() {
  const servicios = [
    {
      title: 'CONSULTORÍA',
      description:
        'Brindamos consultorías e informes especializados al sector público nacional, provincial y municipal en temas de comercio exterior e internacionalización de empresas de las economías regionales de la Argentina.',
    },
    {
      title: 'FORTALECIMIENTO DE LAS CAPACIDADES',
      description:
        'Impulsamos acciones que mejoren la competitividad exportadora, el agregado de valor y la integración de las empresas en cadenas globales.',
    },
    {
      title: 'MISIONES INSTITUCIONALES Y COMERCIALES',
      description:
        'Conectamos instituciones con contrapartes internacionales mediante agendas comerciales, institucionales y visitas técnicas.',
    },
    {
      title: 'CAPACITACIONES',
      description:
        'Ofrecemos programas de formación profesional ajustados a las necesidades del sector público en comercio exterior e internacionalización.',
    },
    {
      title: 'FINANCIAMIENTO PARA EL DESARROLLO REGIONAL',
      description:
        'Asistimos a gobiernos locales en la formulación de proyectos y búsqueda de financiamiento nacional/internacional para infraestructura y comercio exterior.',
    },
  ];

  return (
    <section className="bg-[var(--color-background)] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-[var(--color-secondary)] uppercase mb-8 tracking-wide">
        SECTOR PÚBLICO
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {servicios.map((item, i) => (
          <div
            key={i}
            className="bg-[#214D64] text-white p-6 rounded-xl border-2 border-[#CD8A53] w-full max-w-sm shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-md sm:text-lg font-bold text-center mb-2">{item.title}</h4>
            <p className="text-sm text-justify leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
