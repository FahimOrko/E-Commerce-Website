import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const ItemCard = ({ item }) => {
  const { id, name, description, price, vegetarian, imageUrl } = item;
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-full w-full flex-col justify-between text-wrap rounded-md border border-stone-600 bg-white shadow-lg">
      <div>
        <div className="relative">
          <img
            className="relative h-44 w-full rounded-t-md border-b border-stone-500 object-cover object-center md:h-72"
            src={imageUrl}
            alt={name}
          />
          <button className="text-md absolute right-3 top-3 flex w-fit text-wrap rounded-full bg-stone-700/90 px-3 py-2 font-extrabold tracking-tighter text-stone-100 shadow-lg hover:bg-yellow-300 hover:text-stone-700 md:text-lg">
            Add To Cart
          </button>
        </div>
        <div className="flex flex-col px-4 py-2">
          <ul>
            <li className="text-md mt-1 flex items-center gap-3 font-bold uppercase tracking-wide text-stone-700 sm:text-lg">
              {name}
              <p
                className={`sm:text-md w-fit text-wrap rounded-full px-2 py-1 text-xs font-bold text-stone-100 ${
                  vegetarian ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {vegetarian ? <p>Veg</p> : <p>Non-Veg</p>}
              </p>
            </li>
            <li className="mt-2 text-wrap text-xs tracking-wide text-stone-600 sm:text-sm">
              {description}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="mb-2 flex w-full items-center justify-between px-4 py-2">
          <li className="text-md flex w-fit text-wrap rounded-lg bg-blue-200 px-2 py-1 font-bold text-stone-700 sm:text-lg">
            {price}
          </li>
          <li className="flex items-center justify-center gap-3">
            <button
              className="text-md flex w-fit text-wrap rounded-full bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 px-2 py-1 font-bold text-stone-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-600 hover:text-stone-800 md:text-lg"
              onClick={() => setCount((c) => (c > 1 ? c - 1 : 0))}
            >
              <Minus />
            </button>
            <p className="text-md tracking-wide text-stone-700 sm:text-lg">
              {count}
            </p>
            <button
              className="text-md flex w-fit text-wrap rounded-full bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 px-2 py-1 font-bold text-stone-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-600 hover:text-stone-800 md:text-lg"
              onClick={() => setCount((c) => c + 1)}
            >
              <Plus />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
