import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ChevronDown, Search, User } from 'lucide-react';

export function BreadcrumbDashboard() {
  return (
    <section className="border-b-[0.5px] border-neutral-400 watch-sm:px-4 lg:px-14 py-6">
      <nav className="flex items-center justify-between">
        <div>
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-4">
              <BreadcrumbItem>
                <BreadcrumbLink href="/ragip-diler/dashboard/home">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 text-neutral-950">
                    <p>All Acounts</p>
                    <ChevronDown className="size-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="lg:w-32">
                  <DropdownMenuLabel className="text-center">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 size-4" />
                      <span>Account 1</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <User className="mr-2 size-4" />
                      <span>Account 2</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <User className="mr-2 size-4" />
                      <span>Account 3</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="relative watch-sm:hidden lg:flex">
          <Input
            className="w-24 border-none pl-8 shadow-none"
            placeholder="Search"
          />
          <Search className="absolute left-1 top-2 size-5 text-neutral-400" />
        </div>
      </nav>
    </section>
  );
}
