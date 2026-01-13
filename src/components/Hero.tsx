import { useState, useEffect } from "react";

interface HeroProps {
    images: string[];
    headings?: string[];
    interval?: number;
}

export default function Hero({images, headings = [], interval = 2000}:HeroProps) {

  const [currentImage, setCurrentImage] = useState<string>(images[0]);

 useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentImage(prev => {
      let next;
      do {
        next = images[Math.floor(Math.random() * images.length)];
      } while (next === prev && images.length > 1); // evita ripetizioni consecutive
      return next;
    });
  }, interval);

  return () => clearInterval(intervalId); // cleanup per evitare memory leak
}, [images, interval]);


  return (
    <section
      className="h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat transition-opacity flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
        {headings.map((text, index)=> (
            <h3 key={index} className="text-lg md:text-2x1">{text}</h3>
        ))}
    
    </section>
  );
}
