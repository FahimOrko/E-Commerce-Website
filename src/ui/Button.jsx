import { Link } from "react-router-dom";

const Button = ({ type, to, children }) => {
  const style = {
    primary:
      "mt-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-3 py-2 text-base font-semibold text-stone-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-600 hover:text-stone-800 sm:text-lg md:text-xl lg:px-5 lg:py-3 lg:text-2xl",
  };
  return (
    <Link to={to} className={style[type]}>
      {children}
    </Link>
  );
};

export default Button;
