import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Clock } from 'lucide-react';

export default function EditorChoice() {
  const editorItems = [
    {
      image: '/ragip-diler/dashboard.webp',
      badge: 'Finance App',
      hours: '2 hours ago',
      paragraph: 'A full finance app based on a design (Dashboard) made by',
      autor: 'Ragip Diler',
    },
    {
      image: '/ragip-diler/gray-bg.webp',
      badge: 'x',
      hours: 'x hours ago',
      parapraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      autor: 'X',
    },
  ];

  return (
    <section>
      <section>
        <h1 className="text-xl font-medium">Editor&lsquo;s Choice</h1>
        <section className="grid md:grid-cols-2 md:grid-rows-1 py-6 watch-sm:gap-10 md:gap-8">
          {editorItems.map((item, paragraph) => (
            <article className="flex flex-col gap-2">
              <div className="relative">
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  alt="Ragip Diler - Dashboard"
                  className="rounded-xl border-[0.25px] watch-sm:w-80 lg:w-full"
                />
                <Badge className="bg-blue-500 hover:bg-blue-500/50 absolute bottom-2 left-2">
                  Finance
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Clock size={14} />
                <p>{item.hours}</p>
              </div>
              <p className="text-sm">
                {item.paragraph}
                <br />
                <span className="underline">{item.autor}</span>
              </p>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}
