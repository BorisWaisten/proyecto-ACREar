'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function ServicesSection({services}) {
  const servicesLocal = [
    {
      ...services.sectorPrivate
    },
    {
      ...services.sectorPublic
    },
    {
      ...services.publicPrivate
    },
  ];
  return (
    <motion.section
      className="w-full py-16 px-4 bg-[var(--color-secondary)] text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] mb-12">
        {services.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesLocal.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[var(--color-accent)] text-white rounded-xl p-6 flex flex-col items-center shadow-md transition hover:scale-[1.02]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-[var(--color-secondary)]">
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
              <button className="bg-[var(--color-primary)] hover:brightness-90 text-white font-semibold px-6 py-2 rounded-full transition-all">
                {services.button}
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
