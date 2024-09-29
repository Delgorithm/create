import LeftCard from '../cards/left-card';
import RightCard from '../cards/right-card';
import { GraphHome } from './graph-home';

export default function MainGraph() {
  return (
    <section className="px-14 grid grid-cols-2 grid-rows-2">
      <div className="col-span-3">
        <GraphHome />
      </div>
      <LeftCard />
      <RightCard />
    </section>
  );
}
