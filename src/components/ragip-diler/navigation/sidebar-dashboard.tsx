import { ComboboxDashboard } from './combobox-dashboard';
import NavbarSidebarDashboard from './navbar-sidebar-dashboard';

export default function SidebarDashboard() {
  return (
    <section className="flex flex-col h-screen watch-sm:w-10 lg:min-w-[250px] gap-6 border-r-[0.5px] border-neutral-400 bg-[#F7F7F7] watch-sm:py-4 watch-sm:px-1 lg:p-6 text-neutral-950">
      <h2 className="pl-1 text-2xl watch-sm:hidden lg:flex">Ragip Diller</h2>
      <h2 className="pl-1 text-xl watch-sm:flex lg:flex">RD</h2>
      <div className="watch-sm:hidden lg:flex">
        <ComboboxDashboard />
      </div>
      <NavbarSidebarDashboard />
    </section>
  );
}
