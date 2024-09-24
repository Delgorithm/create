import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <Link href="/ragip-diler/dashboard/home">
          <Card className="p-10 text-center transition-all hover:scale-110 hover:bg-neutral-100">
            Dashboard
          </Card>
        </Link>
        <Link href="/">
          <Card className="p-10 text-center transition-all hover:scale-110 hover:bg-neutral-800 hover:text-neutral-400">
            Soon
          </Card>
        </Link>
        <Link href="/">
          <Card className="p-10 text-center transition-all hover:scale-110 hover:bg-neutral-800 hover:text-neutral-400">
            Soon
          </Card>
        </Link>
        <Link href="/">
          <Card className="p-10 text-center transition-all hover:scale-110 hover:bg-neutral-800 hover:text-neutral-400">
            Soon
          </Card>
        </Link>
      </div>
    </section>
  );
}
