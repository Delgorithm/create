import Image from 'next/image';
import { Card } from '../ui/card';

const itemsGrid = [
  { src: '/ensaktas/project-1.webp' },
  { src: '/ensaktas/project-2.webp' },
  { src: '/ensaktas/project-3.webp' },
  { src: '/ensaktas/project-4.webp' },
  { src: '/ensaktas/project-5.webp' },
  { src: '/ensaktas/project-6.webp' },
  { src: '/ensaktas/project-7.webp' },
];

const videoGrid = [{ src: '/ensaktas/movie.mp4' }];

const firstGrid = itemsGrid.slice(1, 4);
const secondGrid = itemsGrid.slice(3, 7);
const thirdGrid = itemsGrid.slice(5, 6);
const fourthGrid = itemsGrid.slice(6, 7);

export function CardHoverFirst() {
  return (
    <Card className="relative group">
      <Image
        src="/ensaktas/project-2.webp"
        width={250}
        height={100}
        alt=""
        className="absolute translate-x-2 rotate-[2deg] top-0 left-0 transition-transform duration-150 group-hover:scale-105 group-hover:-translate-x-14 group-hover:-translate-y-4 group-hover:-rotate-6 rounded-lg"
      />
      <Image
        src="/ensaktas/project-3.webp"
        width={250}
        height={100}
        alt=""
        className="-translate-x-2 translate-y-4 rotate-[-4deg] transition-transform duration-150 group-hover:scale-105 group-hover:translate-x-14 group-hover:translate-y-4 group-hover:rotate-6 rounded-lg"
      />
      <Image
        src="/ensaktas/project-1.webp"
        width={250}
        height={100}
        alt=""
        className="translate-x-2 rotate-[-deg] absolute top-0 left-0 transition-transform duration-150 group-hover:scale-105 group-hover:-translate-y-8 group-hover:rotate-6 rounded-lg"
      />
    </Card>
  );
}

export function CardHoverSecond() {
  return (
    <Card className="relative group z-10">
      <video
        width="250"
        height="100"
        autoPlay
        loop
        muted
        className="hover:rotate-2 rounded-lg"
      >
        <source src="/ensaktas/movie.mp4" type="video/mp4" />
      </video>

      <Image
        src="/ensaktas/project-3.webp"
        width={250}
        height={100}
        alt=""
        className="absolute top-0 translate-y-4 translate-x-6 rotate-[-4deg] transition-transform duration-150 group-hover:scale-105 group-hover:translate-x-12 group-hover:-translate-y-8 group-hover:rotate-3 rounded-lg -z-40"
      />
      <Image
        src="/ensaktas/project-4.webp"
        width={250}
        height={100}
        alt=""
        className="absolute top-0 -translate-y-2 translate-x-6 rotate-[-deg] transition-transform duration-150 group-hover:scale-105 group-hover:-translate-x-5 group-hover:translate-y-2 group-hover:-rotate-6 rounded-lg -z-40"
      />
      <Image
        src="/ensaktas/project-5.webp"
        width={250}
        height={100}
        alt=""
        className="absolute top-0 -translate-y-3 -translate-x-3 rotate-[2deg] transition-transform duration-150 group-hover:scale-105 group-hover:translate-x-16 group-hover:translate-y-4 group-hover:rotate-12 rounded-lg -z-40"
      />
      <Image
        src="/ensaktas/project-1.webp"
        width={250}
        height={100}
        alt=""
        className="absolute top-0 translate-y-3 translate-x-3 rotate-[2deg] transition-transform duration-150 group-hover:scale-105 group-hover:-translate-x-16 group-hover:-translate-y-4 group-hover:-rotate-12 rounded-lg -z-40"
      />
    </Card>
  );
}

export function CardHoverThird() {
  return (
    <Card className="transition-transform duration-150 hover:rotate-6">
      <Image
        src="/ensaktas/project-5.webp"
        width={250}
        height={100}
        alt=""
        className="rounded-lg"
      />
    </Card>
  );
}
export function CardHoverFourth() {
  return (
    <Card className="transition-transform duration-150 hover:rotate-6">
      <Image
        src="/ensaktas/project-6.webp"
        width={250}
        height={100}
        alt=""
        className="rounded-lg"
      />
    </Card>
  );
}
