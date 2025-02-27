import FeaturedItems from "../features/menu/FeaturedItems";
import HonePageHero from "../ui/HomePageHero";

const HomePage = () => {
  return (
    <div className="mx-auto h-auto w-full overflow-hidden">
      <HonePageHero />
      <FeaturedItems />
    </div>
  );
};

export default HomePage;
