import ItemCard from "./ItemCard";
import { indianCuisineMenu } from "../../data/items";

const Items = () => {
  return (
    <div className="mx-auto grid max-w-sm justify-items-center gap-4 px-2 py-4 md:max-w-7xl md:grid-cols-3 md:gap-8 md:px-4 md:py-6">
      {indianCuisineMenu.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
