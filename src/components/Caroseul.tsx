import { useState, useEffect } from "react";
import Card from "./Card";
import type { Product } from "../pages/Home";

interface CarouselProps {
  items: Product[];
}

// Carousel responsivo
const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Aggiorna numero di card visibili secondo la larghezza schermo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 768) setCardsPerView(3);
      else setCardsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setCurrentIndex(prev => (prev + 1) % items.length);
  const prev = () =>
    setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));

  const cardWidth = 100 / cardsPerView;

  return (
    <div className="relative w-full flex items-center justify-center my-8">
      {/* Freccia sinistra */}
      <button
        onClick={prev}
        className="absolute left-0 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        &#8592;
      </button>

      {/* Viewport */}
      <div className="overflow-hidden w-full max-w-[1200px]">
        <div
          className="flex gap-2 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}%)`,
            width: `${(items.length * 100) / cardsPerView}%`
          }}
        >
          {items.map(item => (
            <div key={item.id} className="flex-shrink-0" style={{ width: `${cardWidth}%` }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Freccia destra */}
      <button
        onClick={next}
        className="absolute right-0 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
