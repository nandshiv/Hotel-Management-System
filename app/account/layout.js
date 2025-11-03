import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[18rem_1fr] md:grid-rows-1 h-full gap-6 md:gap-10">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
