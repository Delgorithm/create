import Image from 'next/image';

export default function EightGrid() {
  return (
    <section>
      <Image
        src="/anatolii-dmitrienko/check-instagram.webp"
        height={500}
        width={500}
        alt="Apparel"
        className="watch-sm:object-cover watch-sm:h-32 rounded-xl brightness-[0.8]"
      />
    </section>
  );
}
