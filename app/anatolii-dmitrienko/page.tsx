import EightGrid from '@/components/anatolii-dmitrienko/eigth-grid';
import FifthGrid from '@/components/anatolii-dmitrienko/fifth-grid';
import GridImages from '@/components/anatolii-dmitrienko/grid-images';
import SecondGrid from '@/components/anatolii-dmitrienko/second-grid';
import SeventhGrid from '@/components/anatolii-dmitrienko/seventh-grid';
import SixthGrid from '@/components/anatolii-dmitrienko/sixth-grid';
import ThirdGrid from '@/components/anatolii-dmitrienko/third-grid';
import { ArrowUpRight, Github } from 'lucide-react';

{
  /* Anatolii Dmitrienko */
}

export default function AnatoliiDmitrienkoPage() {
  return (
    <section className="watch-sm:py-8 watch-sm:mx-4 h-full watch-sm:text-xs">
      <div className="grid watch-sm:grid-cols-1 watch-sm:grid-rows-17 watch-sm:gap-4">
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-50 shadow-sm rounded-xl relative">
          <GridImages />
          <p className="absolute bottom-3 text-neutral-50 px-4">
            Enjoy a smooth, well-oragnized photoshoot, allwing you to focus on
            creating memories while I handle the rest.
          </p>
        </div>
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-50 shadow-sm rounded-xl relative">
          <SecondGrid />
          <p className="absolute bottom-3 text-neutral-50 text-center px-10">
            Enjoy high-resolution photos that capture every detail and emotion
            beautifully.
          </p>
        </div>
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-50 bg-white rounded-xl px-4 py-6">
          <article className="flex justify-center gap-6">
            <p className="text-3xl relative">
              30
              <span className="text-xs absolute top-1">%</span>
            </p>
            <p className="text-neutral-500">
              Clients book another session with a year
            </p>
          </article>
        </div>
        <div className="watch-sm:row-span-1 border-[0.25px] border-neutral-50 shadow-sm rounded-xl relative">
          <ThirdGrid />
          <p className="absolute top-3 left-[30%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-400 to-neutral-100 bg-clip-text text-transparent">
            Taken with precision
          </p>
        </div>
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-50 shadow-sm rounded-xl">
          <FifthGrid />
        </div>
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-50 shadow-sm rounded-xl">
          <SixthGrid />
        </div>
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-50 shadow-sm rounded-xl">
          <SeventhGrid />
        </div>
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-50 shadow-sm rounded-xl relative">
          <EightGrid />
          <article className="px-6 absolute w-full bottom-2 text-neutral-50">
            <Github />
            <div className="flex items-center justify-between py-3">
              <p>Check my GitHub</p>
              <ArrowUpRight />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
