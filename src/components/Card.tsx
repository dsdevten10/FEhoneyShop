import type { Product } from "../pages/Home";

interface CardProps {
  item: Product;
}

// Card prodotto
const Card = ({ item }: CardProps) => {
  return (
    <div className="relative w-48 h-64 border rounded-xl overflow-hidden shadow-md group cursor-pointer">
      {/* Immagine */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

      {/* Info prodotto */}
      <div className="p-2 flex flex-col gap-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-800 font-medium">{item.price.toFixed(2)} €</p>
      </div>

      {/* Overlay add to cart */}
      <button
        className="absolute inset-0 flex items-center justify-center 
                   bg-black/50 text-white font-medium opacity-0 
                   group-hover:opacity-100 transition-opacity"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
