export default function Footer() {
  return (
    <footer className="bg-secondary text-white p-4 text-center">
      © {new Date().getFullYear()} ACREar. Todos los derechos reservados.
    </footer>
  );
}