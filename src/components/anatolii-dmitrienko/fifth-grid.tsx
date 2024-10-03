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
        className="w-full h-12 bg-white absolute top-[3%]"
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
        className="w-full h-12 bg-white absolute top-[23%]"
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
        className="w-full h-12 bg-white absolute top-[42%]"
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
        className="w-full h-16 bg-white absolute top-[58%]"
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
        className="w-full h-10 bg-white absolute top-[82%]"
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
