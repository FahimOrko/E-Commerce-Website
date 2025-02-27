import { NavLink } from "react-router-dom";

const NavLinkOfPages = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-1.5 sm:py-1 ${isActive ? "text-stone-800" : "hover:text-stone-500"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `py-1.5 sm:py-1 ${isActive ? "text-stone-800" : "hover:text-stone-500"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) =>
          `py-1 sm:py-1 ${isActive ? "text-stone-800" : "hover:text-stone-500"}`
        }
      >
        Menu
      </NavLink>
    </>
  );
};

export default NavLinkOfPages;
