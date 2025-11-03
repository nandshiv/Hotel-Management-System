"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams();

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex md:flex-col gap-2 md:gap-3 bg-primary-900/40 border border-primary-800/70 rounded-xl p-2 md:p-3">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        3-4
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4-7
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8-12
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`$${""}
        ${
          filter === activeFilter
            ? "bg-accent-500 text-primary-900"
            : "bg-primary-800/60 text-primary-100"
        } w-full md:w-auto rounded-full py-2 px-5 text-sm font-semibold hover:bg-accent-400 hover:text-primary-900 transition-colors`}
    >
      {children}
    </button>
  );
}

export default Filter;
