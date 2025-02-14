import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet.",
    price: 10.99,
    image: "chicken.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Consectetur adipiscing elit.",
    price: 9.99,
    image: "pasta.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Sed do eiusmod tempor incididunt.",
    price: 5.99,
    image: "morzerella-rolls.jpg",
  },
];

const ProductList = () => {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
