import { useState, useEffect } from "react";
import Card from "./Card";

interface Item {
  image: string;
  title: string;
  price: string;
}

interface CarouselProps {
  items: Item[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Aggiorna numero card visibili secondo lo schermo
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4); // Desktop
      else if (window.innerWidth >= 768) setCardsPerView(3); // Tablet
      else setCardsPerView(1); // Mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funzione per andare a destra
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Funzione per andare a sinistra
  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  // Larghezza dinamica della card in %
  const cardWidth = 100 / cardsPerView;

  return (
    <div className="relative w-full flex items-center justify-center">
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
          className="flex transition-transform duration-500 gap-2"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}%)`,
            width: `${(items.length * 100) / cardsPerView}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}%` }}
            >
              <Card image={item.image} title={item.title} price={item.price} />
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
}
