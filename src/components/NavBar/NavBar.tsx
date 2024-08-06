import { AppRouteKey } from "@/core/constants/routes";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full bg-black h-14 flex items-center justify-end gap-7 px-6">
      <Link
        href={AppRouteKey.home}
        className="text-white no-underline transition-costume hover:text-gray-300"
      >
        Home
      </Link>
    </nav>
  );
};

export default NavBar;
