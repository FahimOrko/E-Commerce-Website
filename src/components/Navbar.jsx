import { NavLink } from "react-router-dom";
// import motion from "motion/react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900    text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <NavLink to="/">
          <img className="h-16 w-32" src="logo.png" alt="logo" />
        </NavLink>

        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-violet-500 ${isActive ? "text-blue-400" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `hover:text-violet-500 ${isActive ? "text-blue-400" : ""}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-violet-500 ${isActive ? "text-blue-400" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-violet-500 ${isActive ? "text-blue-400" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        <NavLink
          to="/login"
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
