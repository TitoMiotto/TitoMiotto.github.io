import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

const certificateFiles = import.meta.glob('/public/certificados/*.pdf', { eager: true, query: '?url', import: 'default' });
const mcpCertificates = [
  { filename: 'conaiisi-2025.pdf', label: 'CONAIISI 2025' },
  { filename: 'wicc-2026.pdf', label: 'WICC 2026' },
].filter(item => certificateFiles[`/public/certificados/${item.filename}`]);

const projects = [
  {
    num: '01', category: 'INVESTIGACIÓN · INTELIGENCIA ARTIFICIAL', title: 'Evaluación automática de respuestas con LLM',
    description: 'Investigación sobre el uso de modelos de lenguaje pequeños para evaluar respuestas abiertas a partir de criterios de corrección y métricas cuantitativas.',
    details: 'Responsable de la planificación y seguimiento del proyecto, investigación bibliográfica, preparación del dataset, implementación, experimentación, análisis de resultados e informes de avance. Implementación y evaluación de enfoques de fine-tuning y RAG; estudio de OCR, redes neuronales y mecanismos de atención.',
    tags: ['Python', 'LLM', 'NLP', 'Fine-tuning', 'RAG', 'Evaluación experimental'],
    status: 'Investigación',
  },
  {
    num: '02', category: 'INVESTIGACIÓN · INTEGRACIÓN DE SISTEMAS', title: 'Integración de herramientas y agentes mediante MCP',
    description: 'Investigación independiente sobre integración de modelos de lenguaje con herramientas y servicios utilizando Model Context Protocol (MCP).',
    details: 'Trabajo de investigación, diseño e implementación de prototipos, elaboración de reportes de avance, evaluación experimental y comunicación de resultados científicos. Proyecto desarrollado en el Laboratorio de Investigación en Software de la UTN.',
    tags: ['MCP', 'LLM', 'Integración', 'Prototipos', 'Investigación'],
    href: 'https://github.com/UTN-LIS/MCP_Web_Scrapper',
    hrefLabel: 'Ver repositorio', status: 'Investigación', certificates: mcpCertificates,
  },
  {
    num: '03', category: 'FREELANCE · PORTAL DE CONTENIDOS', title: 'MalditoClub — portal de noticias',
    description: 'Portal para publicar noticias de actualidad, organizarlas por secciones e incorporar imágenes, con una interfaz simple de carga de contenidos.',
    details: 'Desarrollo individual para el proyecto radiofónico MalditoClub, en La Rioja. Se implementó el portal de visualización y publicación de noticias, integrado con la autenticación ya existente. El cliente posteriormente reemplazó la página por otro sistema: esta demo recupera las pantallas y los datos de muestra del proyecto original, con navegación por noticias y categorías.',
    tags: ['Desarrollo web', 'Gestión de contenidos', 'Categorías', 'Publicación de noticias'],
    internal: '/maldito-club', hrefLabel: 'Explorar demo interactiva', status: 'Proyecto realizado',
  },
  {
    num: '04', category: 'FREELANCE · SISTEMA COMERCIAL', title: 'Catálogo y gestión de pedidos',
    description: 'Aplicación comercial con catálogo de productos, carrito y registro de pedidos, sin procesamiento de pagos.',
    details: 'Desarrollo individual de interfaces para clientes y administración, backend y persistencia de datos. Funcionalidades de gestión de productos, stock, usuarios, estados de pedidos y notificaciones. Proyecto en etapa final de desarrollo.',
    tags: ['JavaScript', 'Vite', 'Node.js', 'PostgreSQL', 'API', 'Carrito'],
    href: 'https://ncmhomelr.github.io/', hrefLabel: 'Ver catálogo',
    status: 'En desarrollo',
  },
  {
    num: '05', category: 'PROYECTO PERSONAL · GASTRONOMÍA', title: 'Sistema para restaurantes',
    description: 'Sistema de gestión de catálogo y pedidos para restaurantes, diseñado para digitalizar y organizar la operación.',
    details: 'Desarrollo personal de un sistema orientado a la gestión de carta y comandas. Incluyo una vista de demostración del catálogo; las pantallas y operaciones completas del proyecto no forman parte de este repositorio del portfolio.',
    tags: ['Desarrollo web', 'Gestión de pedidos', 'Catálogo'],
    internal: '/pv', hrefLabel: 'Ver demo de catálogo', status: 'Proyecto personal',
  },
  {
    num: '06', category: 'PROYECTO PERSONAL · COMERCIOS', title: 'Punto de venta (POS)',
    description: 'Proyecto de software para operaciones de venta y gestión de productos en pequeños comercios.',
    details: 'Proyecto personal enfocado en el desarrollo de herramientas de gestión comercial. Información técnica, capturas y repositorio pendientes de publicación.',
    tags: ['Sistema de gestión', 'Ventas', 'Software comercial'],
    status: 'Proyecto personal',
  },
];

function EmailContact() {
  const email = 'zsantinoz@gmail.com';
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage('Correo copiado.');
    } catch {
      inputRef.current.focus();
      inputRef.current.select();
      setMessage('Seleccioné el correo para que puedas copiarlo manualmente.');
    }
  }

  return (
    <div className="w-full">
      <label htmlFor="contact-email" className="mb-2 block text-sm text-slate-400">Correo electrónico</label>
      <div className="flex flex-wrap gap-3">
        <input ref={inputRef} id="contact-email" type="text" readOnly value={email} onFocus={event => event.target.select()} className="min-h-11 w-full max-w-xs rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-base text-white focus-visible:outline-2 focus-visible:outline-emerald-400" />
        <button type="button" onClick={copyEmail} className="rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300">Copiar correo</button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-sm text-emerald-300">{message}</p>
    </div>
  );
}

function Arrow({ external = false }) {
  return <span aria-hidden="true" className="ml-1">{external ? '↗' : '→'}</span>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card group flex h-full flex-col rounded-2xl border border-slate-800/90 bg-slate-900/35 p-5 sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold tracking-[.13em] text-emerald-400">{project.category}</p>
        <span className="shrink-0 text-xs font-mono text-slate-500">{project.num}</span>
      </div>
      {project.image && <img className="mb-5 aspect-[16/9] w-full rounded-xl border border-slate-700/70 object-cover object-top" src={project.image} alt="Captura del portal de noticias desarrollado para MalditoClub" loading="lazy" />}
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-50">{project.title}</h3>
      <p className="text-sm leading-6 text-slate-300">{project.description}</p>
      <details className="project-details mt-4 text-sm text-slate-400">
        <summary className="cursor-pointer select-none font-medium text-emerald-300 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">Qué desarrollé <span aria-hidden="true">+</span></summary>
        <p className="mt-3 leading-6">{project.details}</p>
      </details>
      {project.certificates?.length > 0 && <div className="mt-5 border-t border-slate-800 pt-4">
        <p className="mb-2 text-xs text-slate-400">Certificados de presentación</p>
        <ul className="flex flex-wrap gap-3 text-sm">
          {project.certificates.map(item => <li key={item.filename}><a href={`${import.meta.env.BASE_URL}certificados/${item.filename}`} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline">{item.label} · PDF <Arrow external /></a></li>)}
        </ul>
      </div>}
      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-2" aria-label="Tecnologías y áreas">
          {project.tags.map(tag => <span key={tag} className="rounded-md border border-slate-700/75 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300">{tag}</span>)}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-xs">
          <span className="text-slate-400">{project.status}</span>
          {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-300 hover:text-emerald-200">{project.hrefLabel}<Arrow external /></a>}
          {project.internal && <Link to={project.internal} className="font-medium text-emerald-300 hover:text-emerald-200">{project.hrefLabel}<Arrow /></Link>}
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return <div className="mb-8 max-w-2xl">
    <p className="mb-3 font-mono text-xs font-medium tracking-[.17em] text-emerald-400">{eyebrow}</p>
    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
    {children && <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">{children}</p>}
  </div>;
}

export default function Home() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.focus({ preventScroll: true });
      target.scrollIntoView();
    }
  }, [hash, key]);

  const cvUrl = `${import.meta.env.BASE_URL}CV_Tito_Montivero_Detallado_ATS.pdf`;
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080d15] text-slate-200">
      <header className="border-b border-slate-800/70">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8" aria-label="Navegación principal">
          <Link to={{ pathname: "/", hash: "#inicio" }} className="font-mono text-base font-bold tracking-tight text-white">TM<span className="text-emerald-400">_</span></Link>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300 sm:gap-x-8">
            <Link to={{ pathname: "/", hash: "#proyectos" }} className="hover:text-emerald-300">Proyectos</Link>
            <Link to={{ pathname: "/", hash: "#experiencia" }} className="hover:text-emerald-300">Experiencia</Link>
            <Link to={{ pathname: "/", hash: "#contacto" }} className="hover:text-emerald-300">Contacto</Link>
          </div>
        </nav>
      </header>

      <main id="inicio" tabIndex={-1}>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
          <div className="min-w-0">
            <Motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="mb-5 font-mono text-sm text-emerald-400">&gt; Hola, soy Tito Santino Montivero</Motion.p>
            <Motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.08}} className="max-w-3xl text-4xl font-bold leading-[1.13] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Ing. en Sistemas de <span className="text-emerald-400">Información.</span>
            </Motion.h1>
            <Motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.16}} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Desarrollador full stack e investigador en el Laboratorio de Investigación en Software de la UTN. Construyo sistemas web y experimento con modelos de lenguaje para resolver problemas concretos.
            </Motion.p>
            <Motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5,delay:.25}} className="mt-8 flex flex-wrap gap-3">
              <Link to={{ pathname: "/", hash: "#proyectos" }} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">Ver proyectos <Arrow /></Link>
              <a href={cvUrl} download="CV_Tito_Santino_Montivero.pdf" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-300">Descargar CV ↓</a>
              <a href="https://github.com/TitoMiotto" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-800 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white">GitHub <Arrow external /></a>
            </Motion.div>
          </div>
        </section>

        <section id="proyectos" tabIndex={-1} className="scroll-mt-8 border-t border-slate-800/60 bg-[#0b111b] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="01 / TRABAJO SELECCIONADO" title="Proyectos e investigaciones">Investigación académica, desarrollos freelance y sistemas construidos de forma independiente. Cada ficha explica qué resolví y qué tecnologías utilicé.</SectionHeading>
            <div className="grid gap-5 md:grid-cols-2 xl:gap-6">{projects.map(project => <ProjectCard project={project} key={project.num} />)}</div>
          </div>
        </section>

        <section id="experiencia" tabIndex={-1} className="scroll-mt-8 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading eyebrow="02 / TRAYECTORIA" title="Experiencia y formación">Combino el ciclo completo de desarrollo de productos con investigación experimental y publicación científica.</SectionHeading>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 p-6 sm:p-7">
              <p className="font-mono text-xs text-emerald-400">2025 — ACTUALIDAD</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Investigador · LIS, UTN FRC</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Planeamiento, implementación y evaluación de dos líneas de investigación: integración mediante MCP y evaluación automática con modelos de lenguaje pequeños. Preparación de datasets, experimentación, análisis de métricas, reportes y seguimiento de proyectos.</p>
              <p className="mt-4 text-sm text-slate-400">Publicaciones y trabajos presentados en CONAIISI 2025, CONAIISI 2026 y WICC 2026.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 p-6 sm:p-7">
              <p className="font-mono text-xs text-emerald-400">EXPERIENCIA COMPLEMENTARIA</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Desarrollo web y sistemas</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Proyectos freelance individuales para publicación de contenidos y gestión de pedidos. Participación en el grupo universitario de ciberseguridad e infraestructura (2023–2024), con trabajos sobre redes, VPN y servidores web.</p>
              <p className="mt-4 text-sm text-slate-400">Pasantía universitaria (2022): relevamiento informático de hardware y software para el municipio de La Calera.</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/25 p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Tecnologías y áreas de trabajo</h3>
            <dl className="mt-4 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
              <div><dt className="font-medium text-emerald-300">Desarrollo web</dt><dd className="mt-1 leading-6 text-slate-300">JavaScript, React, Vite, Node.js, APIs REST, SQL y PostgreSQL.</dd></div>
              <div><dt className="font-medium text-emerald-300">IA aplicada</dt><dd className="mt-1 leading-6 text-slate-300">Python, LLM, NLP, fine-tuning, RAG, MCP y evaluación experimental.</dd></div>
              <div><dt className="font-medium text-emerald-300">Conocimientos complementarios</dt><dd className="mt-1 leading-6 text-slate-300">OCR, redes neuronales, mecanismos de atención e infraestructura de redes.</dd></div>
              <div><dt className="font-medium text-emerald-300">Idiomas</dt><dd className="mt-1 leading-6 text-slate-300">Inglés: lectura técnica y escritura básica.</dd></div>
            </dl>
          </div>
        </section>

        <section id="contacto" tabIndex={-1} className="scroll-mt-8 border-t border-slate-800/60 bg-[#0b111b] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading eyebrow="03 / CONTACTO" title="¿Hablamos?">Me interesan los desafíos de ingeniería de software, desarrollo web e investigación aplicada.</SectionHeading>
            <div className="flex flex-wrap gap-3">
              <EmailContact />
              <a href="https://github.com/TitoMiotto" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-medium text-white hover:border-emerald-400">GitHub <Arrow external /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-6 text-xs text-slate-500 sm:px-8"><span>© {new Date().getFullYear()} Tito Santino Montivero</span><span>Córdoba, Argentina · Portfolio personal</span></footer>
    </div>
  );
}
