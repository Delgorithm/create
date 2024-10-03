import Image from 'next/image';

export default function SecondGrid() {
  return (
    <section className="relative">
      <Image
        src="/anatolii-dmitrienko/women-1.webp"
        width={500}
        height={500}
        alt="Photography of a person"
        className="rounded-xl h-32 object-cover"
      />
      <div className="w-full h-6 absolute bottom-0 bg-neutral-950 blur-3xl"></div>
    </section>
  );
}
