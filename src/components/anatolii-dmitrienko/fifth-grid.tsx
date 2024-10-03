'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FifthGrid() {
  const fadeAnimation = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };

  return (
    <section className="relative">
      <Image
        src="/anatolii-dmitrienko/sms.webp"
        height={500}
        width={500}
        alt="Apparel"
        className="object-cover rounded-xl"
      />

      <motion.div
        className="w-full h-12 bg-white absolute top-2"
        variants={fadeAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0,
          duration: 3,
          repeat: Infinity,
          repeatDelay: 20,
        }}
      />
      <motion.div
        className="w-full h-12 bg-white absolute top-[4.2rem]"
        variants={fadeAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 3,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 20,
        }}
      />
      <motion.div
        className="w-full h-12 bg-white absolute top-[7.3rem]"
        variants={fadeAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 6,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 20,
        }}
      />
      <motion.div
        className="w-full h-16 bg-white absolute top-[10.5rem]"
        variants={fadeAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 9,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 20,
        }}
      />
      <motion.div
        className="w-full h-10 bg-white absolute top-60"
        variants={fadeAnimation}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 12,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 20,
        }}
      />
    </section>
  );
}
