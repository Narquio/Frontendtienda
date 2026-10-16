import { LinkButton } from '@/components/Button';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
      <h1 className="text-8xl font-extrabold text-accent">404</h1>
      <p className="text-lg text-slate-600">La página que buscás no existe.</p>
      <LinkButton href="/home" size="lg">Volver al Home</LinkButton>
    </section>
  );
}