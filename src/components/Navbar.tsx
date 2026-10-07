import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link href="/">Landing</Link>
      <Link href="/home">Home</Link>
      <Link href="/dashboard">Mi cuenta</Link>
      <Link href="/cart">Carrito</Link>
    </nav>
  );
}