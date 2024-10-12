import {
  CardHoverFirst,
  CardHoverFourth,
  CardHoverSecond,
  CardHoverThird,
} from '@/components/ensaktas/card-hover';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  return (
    <section className="flex justify-center items-center h-screen w-full">
      <section className="grid grid-cols-2 gap-5">
        <Card className="p-10 hover:bg-neutral-100 overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <CardHoverFirst />
            <div className="flex items-center gap-2 mt-6">
              <p>Octobre Shots</p>
              <Separator className="w-8 bg-neutral-950" />
              <p>2024</p>
            </div>
            <p className="text-sm text-neutral-300">14 Shots</p>
          </div>
        </Card>
        <Card className="p-10 transition-transform duration-150 ease-in-out hover:bg-neutral-100 overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <CardHoverSecond />
            <div className="flex items-center gap-2 mt-6">
              <p>Septembre Shots</p>
              <Separator className="w-8 bg-neutral-950" />
              <p>2024</p>
            </div>
            <p className="text-sm text-neutral-300">6 Shots</p>
          </div>
        </Card>
        <Card className="p-10 hover:bg-neutral-100 overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <CardHoverThird />
            <div className="flex items-center gap-2 mt-6">
              <p>August Shots</p>
              <Separator className="w-8 bg-neutral-950" />
              <p>2024</p>
            </div>
            <p className="text-sm text-neutral-300">1 Shot</p>
          </div>
        </Card>
        <Card className="p-10 hover:bg-neutral-100 overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <CardHoverFourth />
            <div className="flex items-center gap-2 mt-6">
              <p>June Shots</p>
              <Separator className="w-8 bg-neutral-950" />
              <p>2024</p>
            </div>
            <p className="text-sm text-neutral-300">1 Shot</p>
          </div>
        </Card>
      </section>
    </section>
  );
}
