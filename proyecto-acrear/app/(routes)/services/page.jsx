import PrivateSectorServices from '@/components/services/private-section-services';
import PublicSectorServices from '@/components/services/public-section-services';

export default function ServiciosPage() {
  return (
    <>
      {/* Portada igual a Nosotros */}
      <div className="relative md:h-[30vw] bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/evento-2.jpg)' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className=" md:text-3xl w-full text-center bg-[var(--color-background)] p-4 font-bold text-[var(--color-primary)]">SERVICIOS</h1>
        </div>
      </div>

      <PublicSectorServices />
      <PrivateSectorServices />
    </>
  );
}
