

interface CardProps {
    image: string; 
    title: string; 
    price:string;
}

export default function Card({image, title, price}: CardProps){
return (
<div className="relative w-48 h-64 border rounded-lg overflow-hidden shadow-lg group ">
<img src={image} alt={title} className="w-full h-40 object-cover" />

<div className="p-2 flex flex-col gap-1">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-700">{price}</p>
</div>
<button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">Add to Card</button>
</div>
);
}