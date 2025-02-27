import React from "react";

const HeaderText = ({ type, children }) => {
  const style = {
    primary:
      "text-wrap text-center text-lg font-bold text-slate-100 sm:text-xl md:text-3xl lg:text-4xl",
    secondary:
      "text-wrap text-center text-lg font-bold text-stone-700 sm:text-xl md:text-3xl lg:text-4xl",
  };
  return <h1 className={style[type]}>{children}</h1>;
};

export default HeaderText;
