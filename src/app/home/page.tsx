export default function Home() {
  const products = [
    { id: 1, name: "Producto 1", price: 12000 },
    { id: 2, name: "Producto 2", price: 18500 },
    { id: 3, name: "Producto 3", price: 9900 },
    { id: 4, name: "Producto 4", price: 25000 },
  ];

  return (
    <div className="min-h-screen bg-surface text-ink">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold text-primary-600">Narquio</span>
          <ul className="hidden gap-6 text-sm font-medium text-muted md:flex">
            <li className="hover:text-primary-600">Productos</li>
            <li className="hover:text-primary-600">Ofertas</li>
            <li className="hover:text-primary-600">Contacto</li>
          </ul>
          <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700">
            Carrito
          </button>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Todo lo que buscás, en un solo lugar
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-50">
          Envíos a todo el país y pagos con Mercado Pago y Stripe.
        </p>
        <button className="mt-8 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-ink transition hover:bg-accent-400">
          Ver productos
        </button>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold">Destacados</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square bg-slate-100" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-lg font-bold text-primary-600">
                  ${p.price.toLocaleString("es-AR")}
                </p>
                <button className="mt-4 w-full rounded-lg bg-primary-50 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-600 hover:text-white">
                  Agregar al carrito
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}