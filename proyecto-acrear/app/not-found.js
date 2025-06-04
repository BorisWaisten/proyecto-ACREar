'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { notFoundData } from '@/data/not-found';



export default function NotFound() {
  const { lang } = useLanguage();
  const t = notFoundData[lang];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-secondary)] px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-[var(--color-accent)] mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-4">
            {t.title}
          </h2>
          <p className="text-[var(--color-primary)] mb-8 max-w-md mx-auto">
            {t.message}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {t.backHome}
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <div className="flex justify-center gap-4">
            <Link 
              href="/about"
              className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              {t.about}
            </Link>
            <span className="text-[var(--color-primary)]">|</span>
            <Link 
              href="/contact"
              className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              {t.contact}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 