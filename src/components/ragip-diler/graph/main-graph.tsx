import { GraphHome } from "./graph-home";

export default function MainGraph() {
	return (
		<section className="px-14 grid grid-cols-2 grid-rows-2">
			<div className="col-span-3">
				<GraphHome />
			</div>
			<div>1</div>
			<div>2</div>
		</section>
	);
}
