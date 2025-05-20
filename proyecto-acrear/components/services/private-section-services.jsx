'use client';

export default function PrivateSectorServices() {
  const servicios = [
    {
      title: 'INTERNACIONALIZACIÓN DE EMPRESAS',
      description:
        'Acompañamos a las empresas en su proceso de internacionalización con estrategias a medida, facilitando su inserción en los mercados globales.',
    },
    {
      title: 'FORMACIÓN',
      description:
        'Brindamos capacitaciones sobre tendencias del comercio internacional, requerimientos de destino, cultura comercial, logística y herramientas de comercio exterior.',
    },
    {
      title: 'PROMOCIÓN DE EXPORTACIONES',
      description:
        'Impulsamos la promoción de la producción regional en ferias, rondas y plataformas internacionales para posicionar la oferta argentina globalmente.',
    },
    {
      title: 'BÚSQUEDA DE CLIENTES EN DESTINO',
      description:
        'Asistimos a las empresas en el diagnóstico y expansión comercial con estrategias para encontrar y fidelizar clientes en destino.',
    },
    {
      title: 'SERVICIOS ADUANEROS',
      description:
        'Acompañamos cada operación para garantizar agilidad, seguridad y eficiencia, gestionando documentación y normativa.',
    },
    {
      title: 'SERVICIOS DE DEPÓSITO FISCAL',
      description:
        'Ofrecemos servicios de depósito fiscal para almacenamiento optimizado de productos, reduciendo tiempos y costos logísticos.',
    },
    {
      title: 'GESTIÓN CONTABLE Y FISCAL',
      description:
        'Asistimos en impuestos locales e internacionales vinculados al comercio exterior, asegurando cumplimiento fiscal y eficiencia tributaria.',
    },
    {
      title: 'FINANCIAMIENTO PARA PROYECCIÓN INTERNACIONAL',
      description:
        'Asesoramos a empresas en créditos, programas de apoyo e inversores para certificar y expandir proyectos productivos internacionalmente.',
    },
    {
      title: 'INFORMES COMERCIALES',
      description:
        'Accedé a estudios e informes comerciales personalizados sobre mercados, competencia, tendencias y normativa internacional.',
    },
  ];

  return (
    <section className="bg-[var(--color-background)] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-lg font-semibold text-[var(--color-secondary)] uppercase mb-8 tracking-wide">
        SECTOR PRIVADO
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
