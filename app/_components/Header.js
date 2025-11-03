import NavToggle from "./NavToggle";
import { auth } from "@/app/_lib/auth";

async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-20 border-b border-primary-800/70 backdrop-blur supports-[backdrop-filter]:bg-primary-900/50 p-2 md:px-8 md:py-5">
      <NavToggle session={session} />
    </header>
  );
}

export default Header;
