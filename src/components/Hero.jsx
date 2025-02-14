const Hero = ({ children }) => {
  return (
    <section className="h-[60vh] w-full flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {children}
      </div>
    </section>
  );
};

export default Hero;
