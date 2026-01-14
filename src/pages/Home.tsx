import { Header } from "../components/Header";
import { Button } from "../components/Button";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Carousel from "../components/Caroseul";

// Hero images
import miele1 from "../assets/pictures/miele1.jpg";
import miele2 from "../assets/pictures/miele2.jpg";
import miele3 from "../assets/pictures/miele3.png";

// Product images
import honey1 from "../assets/pictures/carousel-pictures/honey1.png";
import honey2 from "../assets/pictures/carousel-pictures/honey2.png";
import honey3 from "../assets/pictures/carousel-pictures/honey3.png";
import honey4 from "../assets/pictures/carousel-pictures/honey4.png";
import honey5 from "../assets/pictures/carousel-pictures/honey5.png";

// Hero images array
const heroImages: string[] = [miele1, miele2, miele3];

// Product type
export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
}

// Mock products array
const honeyItems: Product[] = [
  { id: "acacia", image: honey1, title: "Miele di Acacia", price: 12.5 },
  { id: "castagno", image: honey2, title: "Miele di Castagno", price: 10.9 },
  { id: "millefiori", image: honey3, title: "Miele Millefiori", price: 8.9 },
  { id: "arancio", image: honey4, title: "Miele d'Arancio", price: 11.2 },
  { id: "eucalipto", image: honey5, title: "Miele di Eucalipto", price: 13.0 }
];

// Home page component
export const Home = () => {
  return (
    <div>
      <Header />

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Honey Shop</h1>

        <Button label="Click Me" />

        {/* Hero rotante */}
        <Hero images={heroImages} />

        {/* Carousel prodotti */}
        <Carousel items={honeyItems} />
      </main>

      <Footer />
    </div>
  );
};
