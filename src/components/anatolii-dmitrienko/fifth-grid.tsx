'use client';

export default function FifthGrid() {
  return (
    <section className="flex justify-center items-center min-h-full">
      <video
        width="320"
        height="240"
        preload="none"
        playsInline
        muted
        loop
        autoPlay
        className="min-h-full min-w-full object-fill"
      >
        <source src="/anatolii-dmitrienko/sms.mp4" type="video/mp4" />
        <track
          src="/anatolii-dmitrienko/sms.mp4"
          srcLang="en"
          label="English"
        />
      </video>
    </section>
  );
}
