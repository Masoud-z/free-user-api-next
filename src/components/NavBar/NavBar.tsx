import { AppRouteKey } from "@/core/constants/routes";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full bg-black h-14 flex items-center justify-start gap-7 px-6">
      <Link
        href={AppRouteKey.home}
        className="text-white no-underline transition-costume hover:text-gray-300"
      >
        Home
      </Link>
      <Link
        href={AppRouteKey.users.new}
        className="text-white no-underline transition-costume hover:text-gray-300"
      >
        Create User
      </Link>
    </nav>
  );
};

export default NavBar;
