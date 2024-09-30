import LeftCard from '../cards/left-card';
import RightCard from '../cards/right-card';
import { GraphHome } from './graph-home';

export default function MainGraph() {
  return (
    <section className="watch-sm:px-2 lg:px-6">
      <GraphHome />
      <div className="flex watch-sm:flex-col lg:flex-row items-center gap-6 lg:px-10">
        <LeftCard />
        <RightCard />
      </div>
    </section>
  );
}
