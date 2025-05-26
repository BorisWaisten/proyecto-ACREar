'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-between px-6 py-16 bg-[var(--color-background)]">
      {/* Logo con animación */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 w-full md:mb-0 md:w-1/3 flex justify-center"
      >
        <Image
          src="/logos/logo-ACREar2.png"
          alt="Logo ACREarg"
          width={180}
          height={180}
        />
      </motion.div>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-2/3 flex flex-col items-start"
      >
        <h2 className="mx-auto md:mx-0 text-2xl font-bold text-[var(--color-primary)] mb-4">ACREarg</h2>

        <div className="bg-[var(--color-secondary)] text-white rounded-xl px-6 py-4 leading-relaxed font-[Open Sans]">
          <p className="mb-2">
            ACREarg es la Cámara Argentina de Economías Regionales.
            Reunimos productores, exportadores y actores estratégicos para impulsar el desarrollo productivo
            y conectar a las economías regionales con el mundo.
          </p>
          <p>
            Desde el territorio hacia los mercados globales, conectamos la producción regional con oportunidades concretas. 
            Trabajamos junto a empresas, gobiernos locales y actores estratégicos de cada región para fortalecer exportaciones,
            brindar servicios técnicos y generar vínculos efectivos.
          </p>
        </div>

        <p className="text-[var(--color-accent)] italic text-center w-full mt-6 font-semibold">
          “Desarrollo productivo y comercial con visión global”
        </p>
      </motion.div>
    </section>
  );
}
