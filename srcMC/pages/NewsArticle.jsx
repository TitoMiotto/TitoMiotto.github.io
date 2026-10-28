import { Link } from 'react-router-dom';
import { Noticias, Etiqueta } from './configuracion';
import { demoImage } from '../demoAssets';

export default function NewsArticle({ noticia }) {
  const index = Noticias.indexOf(noticia);
  const image = demoImage(noticia.imagen);
  return <article className="mb-12 px-5 md:px-16">
    <Link to={`/maldito-club/etiqueta/${noticia.etiqueta}`} className="inline-block py-3 text-red-400 hover:underline">
      {Etiqueta.find(item => item.id === noticia.etiqueta)?.name || 'Sin categoría'}
    </Link>
    <h1 className="mb-6 font-deuschtlander text-4xl leading-tight tracking-wide text-white md:text-6xl">
      <Link to={noticia.Link || `/maldito-club/noticia/${index}`} target={noticia.Link ? '_blank' : undefined} rel={noticia.Link ? 'noopener noreferrer' : undefined}>{noticia.titulo}</Link>
    </h1>
    {image && <img src={image} alt={noticia.titulo} className="mb-5 max-h-96 max-w-full rounded-lg object-contain" />}
    <div className="max-w-4xl space-y-5 font-altehaas text-base leading-8 text-gray-300">
      {noticia.texto.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    </div>
  </article>;
}
