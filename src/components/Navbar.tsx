import Link from 'next/link';
import { LinkButton } from './Button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-muted/30 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-primary">Nar</span>
          <span className="text-accent">quio</span>
        </Link>

        <ul className="flex items-center gap-2">
          <li>
            <LinkButton href="/home" variant="ghost" size="sm">Home</LinkButton>
          </li>
          <li>
            <LinkButton href="/cart" variant="outline" size="sm">Carrito</LinkButton>
          </li>
          <li>
            <LinkButton href="/dashboard" variant="primary" size="sm">Mi cuenta</LinkButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}