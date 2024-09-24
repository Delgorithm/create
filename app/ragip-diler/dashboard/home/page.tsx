import HeaderGraph from "@/components/ragip-diler/graph/header-graph";
import MainGraph from "@/components/ragip-diler/graph/main-graph";
import { BreadcrumbDashboard } from "@/components/ragip-diler/navigation/breadcrumb-dashboard";

export default function HomePage() {
	return (
		<section className="w-full">
			<BreadcrumbDashboard />
			<HeaderGraph />
			<MainGraph />
		</section>
	);
}
