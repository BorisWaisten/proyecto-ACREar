import { motion } from 'framer-motion';

export default function AnimatedBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* Fondo animado */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[var(--color-background)] via-[var(--color-accent)]/5 to-[var(--color-primary)]/5 pointer-events-none">
        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        {/* Líneas diagonales animadas */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            background: `repeating-linear-gradient(45deg,var(--color-accent) 0px,var(--color-accent) 1px,transparent 1px,transparent 20px)`,
            animation: 'moveLines 20s linear infinite'
          }} />
        </div>
        {/* Líneas horizontales animadas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            background: `repeating-linear-gradient(90deg,var(--color-accent) 0px,var(--color-accent) 1px,transparent 1px,transparent 30px)`,
            animation: 'moveHorizontalLines 15s linear infinite'
          }} />
        </div>
        {/* Efecto de ondas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at center,var(--color-accent) 0%,transparent 70%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }} />
        </div>
      </div>
      {/* Contenido */}
      <div className="relative z-10">{children}</div>
      {/* Animaciones */}
      <style jsx>{`
        @keyframes moveLines {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes moveHorizontalLines {
          0% { background-position: 0 0; }
          100% { background-position: 100px 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
} 