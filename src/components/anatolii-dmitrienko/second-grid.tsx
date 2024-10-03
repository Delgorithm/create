import Image from 'next/image';

export default function SecondGrid() {
  return (
    <section className="relative">
      <Image
        src="/anatolii-dmitrienko/women-1.webp"
        width={500}
        height={500}
        alt="Photography of a person"
        className="rounded-xl h-32 object-cover brightness-[0.6]"
      />
    </section>
  );
}
