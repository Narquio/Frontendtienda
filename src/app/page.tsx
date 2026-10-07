import Link from "next/link";

export default function Landing() {
  return (
    <section>
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Los mejores productos, al mejor precio.</p>
      <Link href="/home">Ver productos</Link>
    </section>
  );
}