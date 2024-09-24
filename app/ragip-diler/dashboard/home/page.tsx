import HeaderGraph from "@/components/navigation/ragip-diler/graph/header-graph";
import { BreadcrumbDashboard } from "@/components/navigation/ragip-diler/navigation/breadcrumb-dashboard";

export default function HomePage() {
	return (
		<section className="w-full">
			<BreadcrumbDashboard />
			<HeaderGraph />
		</section>
	);
}
