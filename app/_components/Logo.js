import Link from "next/link";

function Logo({ handleToggle }) {
  return (
    <Link
      onClick={handleToggle}
      href="/"
      className="flex items-center gap-4 z-10 flex-col md:flex-row mb-2 md:mb-0"
    >
      <span className="inline-flex items-center justify-center rounded-xl bg-primary-900/60 border border-primary-800/70 size-[60px]">
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Hotel Management System logo"
          role="img"
        >
          <rect x="3" y="14" width="42" height="28" rx="4" className="fill-primary-800" />
          <path d="M6 14L24 4L42 14" className="fill-primary-700" />
          <rect x="12" y="24" width="10" height="18" rx="1" className="fill-primary-600" />
          <rect x="26" y="24" width="10" height="10" rx="1" className="fill-primary-600" />
          <circle cx="39" cy="32" r="4" className="fill-accent-500" />
        </svg>
      </span>
      <span className="text-xl font-semibold hover:text-accent-400 transition-colors text-black md:text-primary-100">
        Hotel Management System
      </span>
    </Link>
  );
}

export default Logo;
