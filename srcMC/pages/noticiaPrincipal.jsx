import { Link, useParams } from 'react-router-dom';
import HeaderAnimado from './headerMC';
import NewsArticle from './NewsArticle';
import { Noticias } from './configuracion';

export default function NoticiaPrincipal() {
  const { id } = useParams();
  const noticia = /^\d+$/.test(id || '') ? Noticias[Number(id)] : null;
  return <div className="min-h-screen bg-black text-white">
    <HeaderAnimado />
    <main className="mx-auto max-w-6xl py-10">
      <Link to="/maldito-club" className="mx-5 mb-8 inline-block py-3 text-red-300">← Todas las noticias</Link>
      {noticia ? <NewsArticle noticia={noticia} /> : <p className="p-5" role="status">No encontramos esa noticia.</p>}
    </main>
  </div>;
}
