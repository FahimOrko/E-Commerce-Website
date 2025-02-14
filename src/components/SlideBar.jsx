import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://pastaevangelists.com/cdn/shop/articles/How_Much_Pasta_Per_Person.png?v=1646755057&width=600",
    title: "Delicious Pasta",
    description: "Enjoy our freshly made pasta with organic ingredients.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoCeIClLz05WIOnrpLxTalVemQkNgE9j2FA&s",
    title: "Juicy Burgers",
    description: "Savor the taste of our juicy, grilled-to-perfection burgers.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQsmjNlFoUJQToyGRkuG1iFHgFhT028v0Zw&s",
    title: "Sweet Desserts",
    description: "Indulge in our mouth-watering selection of sweet treats.",
  },
];

export default function FullScreenSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[88vh] overflow-hidden bg-slate-600">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-10 left-10 bg-black/70 text-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </motion.div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
