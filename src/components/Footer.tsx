export default function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-muted/15">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-slate-700 sm:flex-row">
        <p className="font-bold">
          <span className="text-primary">Nar</span>
          <span className="text-accent">quio</span>
        </p>
        <p>© {new Date().getFullYear()} Ecommerce Narquio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}