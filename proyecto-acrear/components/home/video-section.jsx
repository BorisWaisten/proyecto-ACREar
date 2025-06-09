'use client';

export default function VideoSection({video}) {
  return (
    <section className="w-full  sm:h-[70vh] md:h-screen sm:p-1 flex flex-col items-center justify-center">
      <div className="w-full  aspect-video overflow-hidden ">
        <video
          className="w-full h-full object-cover"
          src="/video-section.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
          poster=""
          style={{
            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
            imageRendering: 'crisp-edges',
          }}
        />
      </div>
    </section>
  );
}
