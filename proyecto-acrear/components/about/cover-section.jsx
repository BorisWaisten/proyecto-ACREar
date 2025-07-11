export default function CoverSection() {
  return (
            <div className="relative h-[50vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/fotos/nosotros-1.jpg)' }}>
                <div className="absolute  inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl w-full text-center p-4 font-bold text-white">Sobre Nosotros</h1>
                </div>
            </div>
  );
}
