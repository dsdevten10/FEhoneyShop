import { Header } from "../components/Header";
import { Button } from "../components/Button";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Carousel from "../components/Caroseul";

import miele1 from "../assets/pictures/miele1.jpg"; 
import miele2 from "../assets/pictures/miele2.jpg"; 
import miele3 from "../assets/pictures/miele3.png"; 

import honey1 from "../assets/pictures/carousel-pictures/honey1.png"
import honey2 from "../assets/pictures/carousel-pictures/honey2.png"
import honey3 from "../assets/pictures/carousel-pictures/honey3.png"
import honey4 from "../assets/pictures/carousel-pictures/honey4.png"
import honey5 from "../assets/pictures/carousel-pictures/honey5.png"


const heroImages: string[] = [miele1 , miele2, miele3]; 
const honeyImages: string[] = [honey1, honey2, honey3, honey4, honey5]
const honeyItems = honeyImages.map((image, index) => ({ 
  image, 
  title: `Honey ${index + 1}`, 
  price: "10.99" 
}));


export const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Honey Shop</h1>
        <Button label="Click Me" />
        <Hero images={heroImages}/>
        <Carousel items={honeyItems}/>
      </main>
      <Footer/>
    </div>
  );
};
