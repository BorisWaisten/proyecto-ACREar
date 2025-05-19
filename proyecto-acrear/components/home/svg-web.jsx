export default function SvgWeb({ link }) {
    return (
      <svg
        className="w-[3vh] sm:w-[4vh] md:w-[5vh] lg:w-[5vh] md:h-[5vh] lg:h-[5vh] cursor-pointer"
        onClick={() => window.open(link, '_blank')}
        height="5vh"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pantalla principal */}
        <rect x="112" y="192" width="800" height="600" fill="#3D5AFE" rx="40" ry="40" />
        
        {/* Línea horizontal como la barra del navegador */}
        <rect x="160" y="240" width="720" height="40" fill="#FFEA00" />
  
        {/* Tres círculos como iconos de la barra */}
        <circle cx="200" cy="260" r="10" fill="#FF5733" />
        <circle cx="240" cy="260" r="10" fill="#FFEA00" />
        <circle cx="280" cy="260" r="10" fill="#00FFAB" />
  
        {/* Texto en el centro de la pantalla */}
        <text
          x="512"
          y="580"
          textAnchor="middle"
          fontSize="250"
          fontFamily="Arial, sans-serif"
          fill="#FFFFFF"
          fontWeight="bold"
        >
          WEB
        </text>
  
        {/* Cuello de la computadora */}
        <rect x="462" y="792" width="100" height="80" fill="#3D5AFE" />
  
        {/* Base de la computadora */}
        <rect x="312" y="872" width="400" height="40" fill="#3D5AFE" />
        <rect x="400" y="920" width="224" height="20" fill="#3D5AFE" />
      </svg>
    );
  }
  