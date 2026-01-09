import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>{product.name}</h3>
      <p><strong>{product.price}€</strong></p>
      <p>{product.description}</p>
    </div>
  );
}
