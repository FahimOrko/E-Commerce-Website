import Items from "../features/menu/Items";
import HeaderText from "../ui/HeaderText";

const ProductPage = () => {
  return (
    <div className="h-auto max-w-full">
      <div className="flex items-center justify-center px-2 py-4 md:px-4 md:py-6">
        <span className="w-fit border-b-4 border-stone-500 px-1 pb-2">
          <HeaderText type="secondary">Prodcuts</HeaderText>
        </span>
      </div>

      <Items />
    </div>
  );
};

export default ProductPage;
