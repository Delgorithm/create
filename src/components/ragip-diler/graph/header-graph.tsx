import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  EllipsisVertical,
  Minus,
  Plus,
} from 'lucide-react';

export default function HeaderGraph() {
  return (
    <header className="px-14 py-6 flex flex-col gap-4">
      <p className="font-semibold">Balance</p>

      <section className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">$5,689</h2>
        <div className="flex items-center border-[0.5px] border-neutral-200 rounded-xl px-3 text-xs">
          <article className="flex items-center gap-2">
            <Minus className="text-blue-500 size-10" />
            <p>Money in:</p>
            <span className="flex items-center font-semibold gap-1">
              <ArrowDown size={18} /> $12,037
            </span>
          </article>
          <Minus className="rotate-90 text-neutral-100" />
          <article className="flex items-center gap-2">
            <Minus className="text-red-500 size-10" />
            <p>Money out:</p>
            <span className="flex items-center font-semibold gap-1">
              <ArrowUp size={18} /> $5,376
            </span>
          </article>
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-blue-500 text-neutral-100 px-2"
              >
                Move Money <Minus className="rotate-90 size-4 text-blue-400" />{' '}
                <ChevronDown className="text-neutral-100 size-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-100">
              <DialogHeader>
                <DialogTitle>Move Money</DialogTitle>
                <DialogDescription>
                  Make changes to your account here. Click save when
                  you&lsquo;re done.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-white  px-2 flex items-center gap-2"
              >
                <Plus className="size-4" />
                Add Account
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-100">
              <DialogHeader>
                <DialogTitle>Add Account</DialogTitle>
                <DialogDescription>
                  Create a new account to add. CLick save when you&lsquo;re
                  done.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="px-1">
              <Button variant="outline">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex items-center gap-2">
                  <span>Option 1</span>
                  <ChevronRight className="size-4" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <span>Option 2</span>
                  <ChevronRight className="size-4" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <span>Option 3</span>
                  <ChevronRight className="size-4" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </header>
  );
}
