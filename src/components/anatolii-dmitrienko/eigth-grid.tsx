import Image from 'next/image';

export default function EightGrid() {
  return (
    <section>
      <Image
        src="/anatolii-dmitrienko/check-instagram.webp"
        height={500}
        width={500}
        alt="Apparel"
        className="object-cover h-32 rounded-xl"
      />
    </section>
  );
}
