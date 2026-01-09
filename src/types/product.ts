// creiamo un interface 

export interface Product {
    id: number;
    name: string; // nome del miele per esempio 
    price: number;
    description: string;
    imageUrl?: string;
    stock: number; 
}

// lezione 
// interface mi permette di un oggetto , i tipi di dato 
// ? proprieta opzionale 
// export permette di usare questo oggetto anche in altri file 
