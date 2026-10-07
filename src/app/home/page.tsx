import Link from "next/link";

export default function Home() {
  const products = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
  ];

  return (
    <section>
      <h1>Home</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}