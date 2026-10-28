import { Link } from 'react-router-dom';
import configData from './configMock.json';

/**
 * Public, responsive catalog preview of the restaurant project.
 * The original restaurant's ordering screens and backend are NOT part of this portfolio repository.
 * Avoid sending visitors to missing /tipoProducto/* or /carrito routes.
 */
export default function SelectPv() {
  const categories = configData.tiposProductosData.filter(category => category.esVisible);
  return (
    <div className="min-h-screen bg-[#f6f6f3] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link to="/" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"><span aria-hidden="true">←</span> Volver al portfolio</Link>
          <span className="text-xs font-semibold uppercase tracking-[.15em] text-slate-500">Vista de demostración</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-emerald-700">Proyecto personal · Restaurante</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Carta digital</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">Una vista responsive del catálogo de categorías de un sistema de pedidos para restaurantes. Esta demostración es visual: las pantallas de productos, carrito y gestión completa pertenecen a otro proyecto y no están incluidas aquí.</p>
        </div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold sm:text-2xl">Categorías</h2>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">{categories.length} disponibles</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(category => (
            <article key={category.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <img src={`${import.meta.env.BASE_URL}assets/${category.imagen}`} alt={`Categoría ${category.nombre}`} className="aspect-[16/10] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{category.nombre}</h3>
                {category.descripcion && <p className="mt-2 text-sm leading-6 text-slate-600">{category.descripcion}</p>}
                <p className="mt-4 text-xs text-slate-500">{category.cantidadProductos} {category.cantidadProductos===1?'producto de muestra':'productos de muestra'}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5 text-sm leading-6 text-emerald-950">
          <strong>Sobre esta demo.</strong> Es una muestra del catálogo. No permite enviar pedidos ni simula funciones que el repositorio del portfolio no incluye.
          <div className="mt-4"><Link className="font-semibold underline decoration-emerald-400 underline-offset-4 hover:text-emerald-700" to="/">Conocer el proyecto en el portfolio →</Link></div>
        </div>
      </main>
    </div>
  );
}
