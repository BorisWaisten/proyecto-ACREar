'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection( { about } ) {

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-between px-6 py-16 relative overflow-hidden">

      {/* Contenido existente */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        {/* Logo con animación */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 w-full md:mb-0 md:w-1/3 flex justify-center"
        >
          <Image
            src="/logos/logo-acrear2.png"
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
          <h2 className="mx-auto md:mx-0 text-2xl font-bold text-[var(--color-primary)] mb-4">{about.title}</h2>

          <div className="bg-[var(--color-secondary)] text-white rounded-xl px-6 py-4 leading-relaxed font-[Open Sans]">
            <p className="mb-2">{about.text1}
            </p>
            <p>{about.text2}
            </p>
          </div>

          <p className="text-[var(--color-accent)] italic text-center w-full mt-6 font-semibold">
            {about.text3}
          </p>
        </motion.div>
      </div>


    </section>
  );
}
