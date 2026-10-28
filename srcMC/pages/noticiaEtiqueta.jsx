import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderAnimado from './headerMC';
import NewsArticle from './NewsArticle';
import { Noticias, Etiqueta } from './configuracion';

function CategoryNews({ category }) {
  const [page, setPage] = useState(1);
  const news = Noticias.filter(item => item.etiqueta === Number(category));
  const label = Etiqueta.find(item => item.id === Number(category))?.name;
  const pages = Math.ceil(news.length / 8);
  return <div className="min-h-screen bg-black text-white">
    <HeaderAnimado />
    <main className="mx-auto max-w-6xl py-10">
      <Link to="/maldito-club" className="mx-5 mb-5 inline-block py-3 text-red-300">← Todas las noticias</Link>
      <h1 className="px-5 pb-10 font-deuschtlander text-4xl">{label || 'Categoría no encontrada'}</h1>
      {!news.length && <p className="px-5" role="status">No hay noticias en esta categoría.</p>}
      {news.slice((page - 1) * 8, page * 8).map(item => <NewsArticle key={Noticias.indexOf(item)} noticia={item} />)}
      {pages > 0 && <nav aria-label="Paginación de noticias" className="flex flex-wrap items-center justify-center gap-5 p-5">
        <button type="button" disabled={page === 1} onClick={() => setPage(p => p - 1)} className="bg-red-900 px-4 py-3 disabled:opacity-40">Anterior</button>
        <span>Página {page} de {pages}</span>
        <button type="button" disabled={page === pages} onClick={() => setPage(p => p + 1)} className="bg-red-900 px-4 py-3 disabled:opacity-40">Siguiente</button>
      </nav>}
    </main>
  </div>;
}

export default function NoticiaEtiqueta() {
  const { etiqueta } = useParams();
  return <CategoryNews key={etiqueta} category={etiqueta} />;
}
