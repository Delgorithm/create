import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export default function RecentTransactions() {
  const RecentTransactionItems = [
    {
      logo: '/ragip-diler/netflix-logo.svg',
      title: 'Netflix',
      date: 'Wed, Sep 18, 01:53AM',
      category: 'Entertainement',
      price: '7.50',
    },
    {
      logo: '/ragip-diler/spotify-logo.svg',
      title: 'Spotify',
      date: 'Wed, Sep 18, 06:53PM',
      category: 'Entertainement',
      price: '5.00',
    },
    {
      logo: '/ragip-diler/framer-logo.svg',
      title: 'Framer Pro',
      date: 'Wed, Sep 18, 10:19AM',
      category: 'Software Service',
      price: '29.90',
    },
    {
      logo: '/ragip-diler/prime-logo.svg',
      title: 'Amazon Prime',
      date: 'Wed, Sep 18, 11:22PM',
      category: 'Shopping',
      price: '4.99',
    },
    {
      logo: '/ragip-diler/x-logo.svg',
      title: 'X Premium',
      date: 'Wed, Sep 18, 09:03AM',
      category: 'Social Media',
      price: '8.90',
    },
  ];

  return (
    <section>
      {RecentTransactionItems.map((item, title) => (
        <article
          key={title}
          className="flex items-center text-sm h-[3.55rem] border-[0.25px]"
        >
          <CardHeader>
            <Image src={item.logo} width={30} height={30} alt={item.title} />
          </CardHeader>
          <CardContent className="flex items-center justify-between py-2 w-full">
            <div className="flex flex-col">
              <p className="font-medium">{item.title}</p>
              <p className="font-extralight text-neutral-500 watch-sm:hidden lg:flex">
                {item.date}
              </p>
            </div>
            <Badge className="bg-neutral-100 text-neutral-950 font-light hover:text-white watch-sm:hidden lg:flex">
              {item.category}
            </Badge>
            <p>-${item.price}</p>
          </CardContent>
        </article>
      ))}
    </section>
  );
}
