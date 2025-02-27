const FeaturedItemsHero = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex w-full flex-col items-start justify-between px-4 text-lg font-bold text-stone-700 sm:text-xl md:items-center md:text-3xl lg:text-4xl">
        <p>
          Our <span className="text-yellow-500">Best Delivered</span>
        </p>
        <p>Catagories</p>
      </div>
      <div className="flex w-full flex-col items-start justify-center px-4 text-xs md:text-sm lg:text-base">
        <p>Its not just about brining you food from resturant</p>
        <p className="mt-1 font-semibold text-yellow-500">
          we deliver the expirence
        </p>
      </div>
    </div>
  );
};

export default FeaturedItemsHero;
