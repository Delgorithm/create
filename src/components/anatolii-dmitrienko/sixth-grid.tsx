import Image from 'next/image';

export default function SixthGrid() {
  return (
    <Image
      src="/anatolii-dmitrienko/grid-photograph-2.webp"
      height={500}
      width={500}
      alt="Apparel"
      className="object-cover watch-sm:h-64 sm-md:h-full rounded-xl brightness-[0.8]"
    />
  );
}
