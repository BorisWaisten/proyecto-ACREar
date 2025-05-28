'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

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
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat: loc.lat, lng: loc.lng }}
                zoom={13}
              >
                <Marker position={{ lat: loc.lat, lng: loc.lng }} />
              </GoogleMap>
            </LoadScript>
            <h3 className='text-white'>
              GOOGLE MAPS
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
