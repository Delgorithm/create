'use client';

export default function FifthGrid() {
  return (
    <section className="flex justify-center items-center">
      <video
        width="320"
        height="240"
        preload="none"
        playsInline
        muted
        loop
        autoPlay
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
