'use client';

export default function VideoSection({video}) {
  return (
    <section className="w-full py-16 bg-[var(--color-secondary)] flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)] mb-8 text-center">
        {video.title}
      </h2>

      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-[var(--color-secondary)]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/6OOXn0rcBZI"
          title="Video Institucional ACREarg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
