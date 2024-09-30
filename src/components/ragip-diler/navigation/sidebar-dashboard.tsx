import { ComboboxDashboard } from './combobox-dashboard';
import NavbarSidebarDashboard from './navbar-sidebar-dashboard';

export default function SidebarDashboard() {
  return (
    <section className="flex h-screen min-w-[250px] flex-col gap-6 border-r-[0.5px] border-neutral-400 bg-[#F7F7F7] p-6 text-neutral-950">
      <h2 className="pl-1 text-2xl">Ragip Diller</h2>
      <ComboboxDashboard />
      <NavbarSidebarDashboard />
    </section>
  );
}
