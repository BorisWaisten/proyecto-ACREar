'use client';

export default function VideoSection({video}) {
  return (
    <section className="w-full  sm:h-[70vh] md:h-screen sm:p-1 flex flex-col items-center justify-center">
      <div className="w-full  aspect-video overflow-hidden ">
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
