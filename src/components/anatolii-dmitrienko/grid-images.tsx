'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GridImages() {
  const gridFaces = [
    {
      img: '/anatolii-dmitrienko/grid-face-1.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-2.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-3.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-4.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-5.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-6.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-7.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-8.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-9.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-10.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-11.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-12.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-13.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-14.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-15.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-16.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-17.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-18.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-19.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-20.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-21.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-22.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-23.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-24.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-25.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-26.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-27.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-28.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-29.svg',
    },
    {
      img: '/anatolii-dmitrienko/grid-face-30.svg',
    },
  ];

  const firstGridFaces = gridFaces.slice(0, 10);
  const secondGridFaces = gridFaces.slice(10, 20);
  const thirdGridFaces = gridFaces.slice(20, 30);

  return (
    <section className="overflow-hidden rounded-xl shadow-inner relative sm-md:w-full sm-md:h-full">
      <motion.div
        className="flex items-center gap-[0.5px] overflow-hidden "
        animate={{
          x: [-350, 0, -350],
        }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }}
      >
        {firstGridFaces.map((item, img) => (
          <Image
            key={img}
            src={item.img}
            width={400}
            height={400}
            alt="People faces"
            className="watch-sm:size-20 sm-md:size-24"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex items-center gap-[0.5px] overflow-hidden "
        animate={{
          x: [0, -350, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }}
      >
        {secondGridFaces.map((item, img) => (
          <Image
            key={img}
            src={item.img}
            width={400}
            height={400}
            alt="People faces"
            className="watch-sm:size-20 sm-md:size-24"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex items-center gap-[0.5px] overflow-hidden"
        animate={{
          x: [-330, 0, -330],
        }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }}
      >
        {thirdGridFaces.map((item, img) => (
          <Image
            key={img}
            src={item.img}
            width={400}
            height={400}
            alt="People faces"
            className="watch-sm:size-20 sm-md:size-24"
          />
        ))}
      </motion.div>
      <div className="w-full h-20 absolute bottom-0 bg-neutral-950 blur-3xl"></div>
    </section>
  );
}
