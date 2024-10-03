import Image from 'next/image';

export default function ThirdGrid() {
  return (
    <section className="relative">
      <Image
        src="/anatolii-dmitrienko/apparel.webp"
        height={500}
        width={500}
        alt="Apparel"
        className="h-32 object-cover rounded-xl brightness-[0.7]"
      />
    </section>
  );
}
