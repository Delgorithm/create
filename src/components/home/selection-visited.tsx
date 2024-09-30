import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export default function SelectionVisited() {
  const selectionItems = [
    {
      date_month: 'sept',
      date_day: '30',
      image: '/ragip-diler/dashboard.webp',
      hours: '2 hours ago',
      title: 'Ragip Diler - Dashboard',
      badge: 'Finance App',
      link: '/ragip-diler/dashboard/home',
    },
  ];

  return (
    <section>
      <Card className="p-4 watch-sm:w-full lg:w-[440px]">
        <Tabs defaultValue="latest">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="most-visited">Most visited</TabsTrigger>
            <TabsTrigger value="latest">Latest</TabsTrigger>
          </TabsList>
          <TabsContent value="most-visited">
            <div>
              <p>Soon</p>
            </div>
          </TabsContent>
          {selectionItems.map((item, title) => (
            <TabsContent
              key={title}
              value="latest"
              className="sm-md:flex sm-md:items-center sm-md:justify-around w-full py-6 text-xs"
            >
              <div className="watch-sm:hidden sm-md:flex flex-col text-neutral-500">
                <p>{item.date_month}</p>
                <p className="text-2xl font-medium text-neutral-700">30</p>
              </div>
              <Link href={`${item.link}`}>
                <Image
                  src={item.image}
                  height={180}
                  width={180}
                  alt="Ragip Diler Dashboard"
                  className="rounded-lg border-[0.25px]"
                />
              </Link>
              <article className="px-2 text-neutral-700 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Clock size={12} />
                  <p>{item.hours}</p>
                </div>
                <p className="text-sm">{item.title}</p>
                <Badge className="w-fit bg-blue-500 hover:bg-blue-500/50">
                  {item.badge}
                </Badge>
              </article>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </section>
  );
}
