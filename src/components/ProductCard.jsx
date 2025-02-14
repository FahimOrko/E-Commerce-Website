const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-500">
          ${product.price}
        </span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
