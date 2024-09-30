import EditorChoice from '@/components/home/editor-choice';
import SelectionVisited from '@/components/home/selection-visited';

export default function Home() {
  return (
    <section className="py-16 watch-sm:px-10 xl:px-24 grid xl:grid-cols-3 xl:grid-rows-1 watch-sm:gap-10 lg:gap-24">
      <div className="lg:col-span-1">
        <SelectionVisited />
      </div>
      <div className="lg:col-span-2">
        <EditorChoice />
      </div>
    </section>
  );
}
