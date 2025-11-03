import Link from "next/link";
import { CalendarDaysIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="mt-20 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" aria-hidden="true" />

      {/* Hero */}
      <section className="relative px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl leading-tight text-primary-50 tracking-tight font-semibold">
              Your next stay, designed for comfort
            </h1>
            <p className="mt-5 text-primary-300 text-lg">
              Book stunning mountain cabins with seamless reservations and flexible options for any group size.
            </p>
            <p className="sr-only">
              Explore Hotel Management System Booking by Alamin (CodeWithAlamin). Find unique destinations, thrilling activities, and plan your next wild getaway.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 md:px-8 md:py-4 text-primary-900 text-base md:text-lg font-semibold shadow-lg shadow-accent-900/20 hover:bg-accent-400 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Browse cabins
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-primary-700 bg-primary-900/40 px-6 py-3 md:px-8 md:py-4 text-primary-100 text-base md:text-lg font-semibold hover:bg-primary-800/60 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-primary-800/70 bg-primary-900/40 p-6 shadow-2xl shadow-black/20">
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-xl bg-primary-800/60 border border-primary-700 flex items-center justify-center">
                  <HomeModernIcon className="h-10 w-10 text-accent-400" />
                </div>
                <div className="aspect-square rounded-xl bg-primary-800/60 border border-primary-700 flex items-center justify-center">
                  <CalendarDaysIcon className="h-10 w-10 text-accent-400" />
                </div>
                <div className="aspect-square rounded-xl bg-primary-800/60 border border-primary-700 flex items-center justify-center">
                  <UserGroupIcon className="h-10 w-10 text-accent-400" />
                </div>
                <div className="col-span-3 mt-2 rounded-xl bg-primary-800/40 border border-primary-700 p-4">
                  <p className="text-primary-200 text-sm">
                    Enjoy premium amenities, flexible bookings, and responsive support for a delightful stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="mt-16 px-4">
        <div className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-primary-800/70 bg-primary-900/40 p-6">
            <h3 className="text-primary-100 text-xl font-semibold">Hassle-free booking</h3>
            <p className="text-primary-300 mt-2">Fast reservations with simple edits and cancellations when needed.</p>
          </div>
          <div className="rounded-xl border border-primary-800/70 bg-primary-900/40 p-6">
            <h3 className="text-primary-100 text-xl font-semibold">Cabins for any group</h3>
            <p className="text-primary-300 mt-2">From cozy 2-person escapes to large family retreats.</p>
          </div>
          <div className="rounded-xl border border-primary-800/70 bg-primary-900/40 p-6">
            <h3 className="text-primary-100 text-xl font-semibold">Secure & reliable</h3>
            <p className="text-primary-300 mt-2">Powered by modern tech and best practices for peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Cabins preview callout */}
      <section className="mt-16 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl border border-primary-800/70 bg-primary-900/40 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-50">Find your perfect cabin</h2>
            <p className="text-primary-300 mt-2">
              Filter by capacity, compare prices, and book instantly. Explore all options now.
            </p>
          </div>
          <div>
            <Link
              href="/cabins"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 md:px-8 md:py-4 text-primary-900 text-base md:text-lg font-semibold shadow-lg shadow-accent-900/20 hover:bg-accent-400 hover:shadow-xl transition-all"
            >
              Explore cabins →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
