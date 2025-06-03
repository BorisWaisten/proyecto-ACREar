'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function OfficesSection({ offices }) {
  const locationsLocal = [...offices.locations]
  return (
    <section className="w-full py-16 px-4 bg-[var(--color-secondary)] text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] mb-12">{offices.title}</h2>

      <div className="grid grid-cols-1 bg-[var(--color-secondary)] md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {locationsLocal.map((loc, index) => (
          <div key={index} className="rounded-xl  overflow-hidden border-2 border-[var(--color-accent)]">
            <h3 className="text-[var(--color-primary)] font-semibold text-lg py-2 bg-[var(--color-accent)]">
              {loc.name}
            </h3>
            <MapContainer
              center={[loc.lat, loc.lng]}
              zoom={13}
              style={{ width: '100%', height: '300px' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[loc.lat, loc.lng]}>
                <Popup>
                  {loc.name}
                </Popup>
              </Marker>
            </MapContainer>
            <h3 className='text-white'>
              OpenStreetMap
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
