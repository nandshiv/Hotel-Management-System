import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_2fr] border border-primary-800/70 rounded-xl overflow-hidden bg-primary-900/40 shadow-lg shadow-black/10 hover:shadow-xl transition-shadow">
      <div className="relative">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800/70"
        />
      </div>

      <div className="">
        <div className="pt-5 pb-4 px-7 bg-primary-950/60">
          <h3 className="text-accent-400 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-300" />
            <p className="text-lg text-primary-100">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-500">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-300">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950/60 border-t border-t-primary-800/70 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800/70 py-4 px-6 inline-block hover:bg-accent-500/90 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
