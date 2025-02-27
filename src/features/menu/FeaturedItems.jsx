import FeaturedItemsHero from "./FeaturedItemsHero";
import FeaturedItem from "./FeaturedItem";
import Button from "../../ui/Button";
import { featuredItems } from "../../data/items";

const FeaturedItems = () => {
  return (
    <div className="my-10 overflow-auto px-4 py-4 md:px-4 md:py-6">
      <div className="flex flex-col items-center">
        <FeaturedItemsHero />
        <ul className="mx-auto flex h-[35dvh] max-w-xl flex-col items-center justify-center gap-4 py-10 md:max-w-6xl md:flex-row md:gap-24 lg:h-[40dvh]">
          {featuredItems.map((item) => (
            <FeaturedItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="my-0 sm:my-3 lg:my-4">
          <Button type="primary" to="/product">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
