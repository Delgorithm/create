import { Card, CardHeader } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import CardVirtualPhysical from './card-virtual-physical';

export default function LeftCard() {
  return (
    <section className="w-full">
      <Card className="watch-sm:mx-2">
        <CardHeader className="flex flex-row items-center justify-between text-sm border-b h-2">
          <p>Cards</p>
          <Link
            href="/ragip-diler/dashboard/home"
            className="text-blue-500 flex items-center gap-2 font-medium"
          >
            See Cards <ChevronRight className="size-4" />
          </Link>
        </CardHeader>
        <CardVirtualPhysical />
      </Card>
    </section>
  );
}
