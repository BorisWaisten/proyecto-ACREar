'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import Leaflet components dynamically to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function OfficeMap({ lat, lng, name, address }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Import Leaflet CSS only on client side
    import('leaflet/dist/leaflet.css');
    
    // Fix default marker icon issue with Leaflet in React
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    });
  }, []);

  if (!isClient) {
    return (
      <div 
        style={{ 
          width: '100%', 
          height: '180px', 
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px'
        }}
      >
        <span style={{ color: '#666' }}>Cargando mapa...</span>
      </div>
    );
  }

  return (
    <div>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ width: '100%', height: '180px' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            {name}
          </Popup>
        </Marker>
      </MapContainer>
      {address && (
        <p className="text-xs text-white mt-2 text-center leading-tight">
          {address}
        </p>
      )}
    </div>
  );
} 