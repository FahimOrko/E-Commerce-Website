const FeaturedItem = ({ item }) => {
  const { id, name, description, price, vegetarian, imageUrl } = item;
  return (
    <div className="flex w-full flex-row items-center justify-stretch gap-4 px-4 py-3 md:w-44 md:flex-col md:justify-between md:gap-10">
      <div
        className={`h-24 w-24 rounded-full border-8 border-x-yellow-400 border-y-amber-400 bg-cover bg-center shadow-xl md:h-36 md:w-36`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <p className="mt-0 text-nowrap rounded-full bg-gradient-to-r from-slate-200 via-zinc-200 to-stone-200 px-2 py-1 text-center text-lg font-semibold uppercase text-stone-700 shadow-lg hover:text-stone-800 md:mt-4 md:px-4 md:py-2">
        {name}
      </p>
    </div>
  );
};

export default FeaturedItem;
