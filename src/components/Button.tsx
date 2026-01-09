type ButtonProps = {
    label: string; 
}

export const Button = ({label}: ButtonProps) => {
return (
<div>
<button className="bg-yellow-500 text-white px-4 py-2 cursor-pointer">{label}</button>
</div>
);
}

