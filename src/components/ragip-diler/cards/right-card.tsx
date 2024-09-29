import { Card, CardHeader } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import RecentTransactions from './recent-transactions';

export default function LeftCard() {
  return (
    <section className="w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between text-sm border-b h-2">
          <p>Recent Transaction</p>
          <Link
            href="/ragip-diler/dashboard/home"
            className="text-blue-500 flex items-center gap-2 font-medium"
          >
            See All <ChevronRight className="size-4" />
          </Link>
        </CardHeader>
        <RecentTransactions />
      </Card>
    </section>
  );
}
