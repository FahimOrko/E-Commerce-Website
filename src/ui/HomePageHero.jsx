import Button from "./Button";
import HeaderText from "./HeaderText";

const HomePageHero = () => {
  return (
    <div className="bg-homePageImage flex h-[60dvh] w-full items-center justify-between bg-cover bg-center bg-no-repeat sm:h-[64dvh] md:h-[68dvh] lg:h-[72dvh]">
      <div className="flex h-full w-full items-center justify-center bg-red-500/10 py-8">
        <div className="sm:h-68 lg:h-76 z-10 flex h-64 w-3/5 flex-col items-center justify-center rounded-2xl bg-slate-100/30 px-4 md:h-72">
          <HeaderText type="primary">Get yourself some deshi food</HeaderText>
          <p className="sm:text:base mt-2 block text-wrap px-4 py-2 text-center text-sm text-white md:mt-3 md:text-xl">
            Authetic Sout asina cusine
          </p>
          <Button type="primary" to="/product">
            {" "}
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
