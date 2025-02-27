import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import NavLinkOfPages from "./NavLinkOfPages";
import { div } from "motion/react-client";

const Navbar = () => {
  //   const [cartCount, setCartCount] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-400 px-3 py-2 text-lg sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-3">
      <Link to="/" className="text-lg font-bold text-stone-800 sm:text-xl">
        Logo
      </Link>

      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-2.5 sm:hidden"
        >
          <Menu size={28} strokeWidth={1.75} />
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} mt-2 flex flex-col divide-y divide-stone-600 text-sm font-semibold text-stone-600 sm:mt-0 sm:flex sm:flex-row sm:gap-x-6 sm:gap-y-0 sm:divide-none sm:border-none sm:text-lg`}
        >
          <NavLinkOfPages />
        </div>
      </div>

      <div className="h-1 text-transparent">Home</div>
      <button className="absolute right-14 top-2 flex h-8 w-8 items-center justify-center rounded-3xl border bg-white px-2 py-2 text-stone-700 hover:text-stone-950 sm:right-4 sm:top-3 sm:h-10 sm:w-10">
        <NavLink to="/cart">
          <ShoppingCart size={14} className="cursor-pointer" />
        </NavLink>
      </button>
    </nav>
  );
};

export default Navbar;
