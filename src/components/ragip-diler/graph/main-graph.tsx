import LeftCard from '../cards/left-card';
import RightCard from '../cards/right-card';
import { GraphHome } from './graph-home';

export default function MainGraph() {
  return (
    <section className="px-6">
      <GraphHome />
      <div className="flex items-center gap-10 px-9">
        <LeftCard />
        <RightCard />
      </div>
    </section>
  );
}
