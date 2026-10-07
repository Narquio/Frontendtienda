import Card from "@/components/Cards";
import { Product } from "@/types/product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}