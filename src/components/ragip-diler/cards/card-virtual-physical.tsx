import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const carouselItems = [
  {
    status: 'Active',
    logo: '/ragip-diler/visa-logo.svg',
    year: '1941',
    name: 'Ragip Diler',
  },
  {
    status: 'Inactive',
    logo: '/ragip-diler/visa-logo.svg',
    year: '2013',
    name: 'Ragip Diler',
  },
  {
    status: 'Active',
    logo: '/ragip-diler/visa-logo.svg',
    year: '2008',
    name: 'Ragip Diler',
  },
];

export default function CardVirtualPhysical() {
  return (
    <Tabs
      defaultValue="virtual"
      className="w-full my-2 flex justify-center items-center flex-col"
    >
      <TabsList className="flex justify-center items-center lg:w-72 gap-8 rounded-full">
        <TabsTrigger value="physical">Physical</TabsTrigger>
        <TabsTrigger value="virtual">
          Virtual <span className="ml-1 text-neutral-300">(3)</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="physical">
        <section>
          <p>Physical</p>
        </section>
      </TabsContent>
      <TabsContent value="virtual" className="flex items-center justify-center">
        <Carousel className="max-w-xs watch-sm:w-3/4 lg:w-full">
          <CarouselContent>
            {carouselItems.map((item, year) => (
              <CarouselItem key={year}>
                <section className="h-52 bg-gray-100 rounded-lg text-sm my-2 px-4 flex flex-col justify-between lg:w-full">
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div>
                        <span
                          className={`absolute left-0 top-5 size-2 rounded-full ${item.status === 'Inactive' ? 'bg-red-600' : 'bg-blue-400'} opacity-75`}
                        ></span>
                        <span
                          className={`animate-ping absolute left-0 top-5 size-2 rounded-full ${item.status === 'Inactive' ? 'bg-red-600' : 'bg-blue-400 '}opacity-75`}
                        ></span>
                      </div>
                      <p className="ml-4">{item.status}</p>
                    </div>
                    <Image
                      src={item.logo}
                      width={50}
                      height={50}
                      alt="Visa's logo"
                    />
                  </div>
                  <div className="my-4">
                    <div className="flex items-center gap-3 my-2">
                      <p className="text-4xl text-gray-400">....</p>
                      <p className="text-4xl text-gray-400">....</p>
                      <p className="text-4xl text-gray-400">....</p>
                      <p className="text-sm text-gray-400 translate-y-2.5">
                        {item.year}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">{item.name}</p>
                  </div>
                </section>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </TabsContent>
    </Tabs>
  );
}
