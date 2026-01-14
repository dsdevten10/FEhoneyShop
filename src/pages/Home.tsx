import { Header } from "../components/Header";
import { Button } from "../components/Button";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import miele1 from "../assets/pictures/miele1.jpg"; 
import miele2 from "../assets/pictures/miele2.jpg"; 
import miele3 from "../assets/pictures/miele3.png"; 


const heroImages: string[] = [miele1 , miele2, miele3]; 


export const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Honey Shop</h1>
        <Button label="Click Me" />
        <Hero images={heroImages}/>
      </main>
      <Footer/>
    </div>
  );
};
