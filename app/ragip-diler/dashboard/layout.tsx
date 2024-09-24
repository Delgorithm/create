import SidebarDashboard from "@/components/navigation/ragip-diler/navigation/sidebar-dashboard";

export default function RagipDilerDashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex">
			<SidebarDashboard />
			{children}
		</section>
	);
}
