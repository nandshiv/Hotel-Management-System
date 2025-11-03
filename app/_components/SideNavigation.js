"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav>
      {/* Mobile: top-tabs */}
      <ul className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar p-2 rounded-xl bg-primary-900/40 border border-primary-800/70">
        {navLinks.map((link) => (
          <li key={link.name} className="shrink-0">
            <Link
              className={`$${""} ${
                pathname === link.href
                  ? "bg-accent-500 text-primary-900"
                  : "bg-primary-800/60 text-primary-100"
              } inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent-400 hover:text-primary-900 transition-colors`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <li className="ml-auto">
          <SignOutButton />
        </li>
      </ul>

      {/* Desktop: card sidebar */}
      <ul className="hidden md:flex md:flex-col gap-2 h-full text-lg bg-primary-900/40 border border-primary-800/70 rounded-xl p-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`$${""} ${
                pathname === link.href
                  ? "bg-accent-500 text-primary-900"
                  : "hover:bg-primary-900/60 text-primary-200"
              } py-3 px-5 rounded-lg transition-colors flex items-center gap-4 font-semibold`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
