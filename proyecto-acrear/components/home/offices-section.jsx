'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const locations = [
  {
    name: 'Oficina Central',
    lat: -34.6037,
    lng: -58.3816,
  },
  {
    name: 'Depósito Fiscal',
    lat: -31.4201,
    lng: -64.1888,
  },
  {
    name: 'Delegación Exterior',
    lat: 40.7128,
    lng: -74.0060,
  },
];

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

export default function OfficesSection() {
  return (
    <section className="w-full py-16 px-4 bg-[var(--color-background)] text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-12">NUESTRAS OFICINAS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {locations.map((loc, index) => (
          <div key={index} className="rounded-xl shadow-lg overflow-hidden border-2 border-[var(--color-secondary)]">
            <h3 className="text-[var(--color-primary)] font-semibold text-lg py-2 bg-white">
              {loc.name}
            </h3>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat: loc.lat, lng: loc.lng }}
                zoom={13}
              >
                <Marker position={{ lat: loc.lat, lng: loc.lng }} />
              </GoogleMap>
            </LoadScript>
          </div>
        ))}
      </div>
    </section>
  );
}
