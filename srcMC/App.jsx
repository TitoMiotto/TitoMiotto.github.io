import { useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import NoticiaPrincipal from './pages/noticiaPrincipal';
import NoticiaEtiqueta from './pages/noticiaEtiqueta';
import MalditoClubEstandar from './pages/malditoClubEstandar';

export default function MalditoClubDemo() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return <div className="bg-black">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 bg-slate-950 px-5 py-4 text-sm text-slate-200">
      <Link to={{ pathname: '/', hash: '#proyectos' }} className="py-2 text-emerald-300 hover:underline">← Volver al portfolio</Link>
      <p>Demo de Maldito Club · Contenido de muestra del proyecto original</p>
    </div>
    <Routes>
      <Route index element={<MalditoClubEstandar />} />
      <Route path="noticia/:id" element={<NoticiaPrincipal />} />
      <Route path="etiqueta/:etiqueta" element={<NoticiaEtiqueta />} />
      <Route path="*" element={<div className="p-10 text-white">Página no encontrada. <Link to="/maldito-club" className="underline">Ir al portal</Link></div>} />
    </Routes>
  </div>;
}
