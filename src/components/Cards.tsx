import { Product } from "@/types/product";

export default function Card({ product }: { product: Product }) {
  return (
    <div>
      <img src={product.imgUrl} alt={product.name} width={150} height={150} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}