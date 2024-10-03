import Image from 'next/image';

export default function SeventhGrid() {
  return (
    <section className="py-5">
      <article className="flex justify-center items-center gap-6">
        <p className="text-3xl relative">
          100
          <span className="absolute -top-2">+</span>
        </p>
        <p className="text-neutral-500">Satisfied clients</p>
      </article>
      <Image
        src="/anatolii-dmitrienko/clients.svg"
        height={500}
        width={500}
        alt="Apparel"
        className="rounded-xl h-16 pt-4"
      />
    </section>
  );
}
