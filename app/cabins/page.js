import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 lg:gap-12">
      <aside className="md:sticky md:top-24 h-max">
        <h1 className="text-3xl mb-3 text-accent-400 font-medium">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-300 text-base mb-6">
          Find the perfect stay by size. Filter by capacity to match your
          group.
        </p>
        <Filter />
      </aside>

      <section>
        <Suspense fallback={<Spinner />} key={filter}>
          <CabinList filter={filter} />
        </Suspense>
      </section>
    </div>
  );
}
