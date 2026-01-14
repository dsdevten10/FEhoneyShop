import { useState, useEffect } from "react";

interface HeroProps {
  images: string[];
  headings?: string[];
  interval?: number;
}

// Hero rotante immagini
const Hero = ({ images, headings = [], interval = 3000 }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <section
      className="h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white transition-opacity"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {headings.map((text, idx) => (
        <h3 key={idx} className="text-xl md:text-2xl font-semibold drop-shadow-sm">
          {text}
        </h3>
      ))}
    </section>
  );
};

export default Hero;
