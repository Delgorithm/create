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
    <section className="watch-sm:py-8 watch-sm:mx-4 h-full watch-sm:text-xs transition-all ease-in-out">
      <div className="grid watch-sm:grid-cols-1 watch-sm:grid-rows-17 watch-sm:gap-4 sm-md:grid-cols-4">
        {/* Grid 1 */}
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-200 shadow-sm rounded-xl relative min-h-fit">
          <GridImages />
          <p className="absolute bottom-3 text-neutral-50 px-4">
            Enjoy a smooth, well-oragnized photoshoot, allwing you to focus on
            creating memories while I handle the rest.
          </p>
        </div>

        {/* Grid 2 */}
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-200 shadow-sm rounded-xl relative sm-md:h-32">
          <SecondGrid />
          <p className="absolute bottom-1 text-neutral-50 text-center px-10">
            Enjoy high-resolution photos that capture every detail and emotion
            beautifully.
          </p>
        </div>

        {/* Grid 3 */}
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-200 bg-white rounded-xl px-4 py-6">
          <article className="flex items-center justify-center gap-6 h-full">
            <p className="text-3xl relative">
              30
              <span className="text-xs absolute top-1">%</span>
            </p>
            <p className="text-neutral-500">
              Clients book another session with a year
            </p>
          </article>
        </div>

        {/* Grid 4 */}
        <div className="watch-sm:row-span-1 border-[0.25px] border-neutral-200 shadow-sm rounded-xl relative max-h-fit">
          <ThirdGrid />
          <p className="absolute top-3 watch-sm:left-[30%] sm-md:left-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-400 to-neutral-100 bg-clip-text text-transparent">
            Taken with precision
          </p>
        </div>

        {/* Grid 5 */}
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-200 bg-white shadow-sm rounded-xl">
          <FifthGrid />
        </div>

        {/* Grid 6 */}
        <div className="watch-sm:row-span-3 border-[0.25px] border-neutral-200 bg-white shadow-sm rounded-xl">
          <SixthGrid />
        </div>

        {/* Grid 7 */}
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-200 bg-white shadow-sm rounded-xl ">
          <SeventhGrid />
        </div>

        {/* Grid 8 */}
        <div className="watch-sm:row-span-2 border-[0.25px] border-neutral-200 bg-white shadow-sm rounded-xl relative h-fit">
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
