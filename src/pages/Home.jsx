import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import malditoImg from '../assets/image.png'

function ExpandableAbout({ title, text, foot, image }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-xl p-5 ">
      
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left "
      >
        <span className="text-green-400 font-mono">
          &gt; {title}
        </span>

        <span className="text-gray-500">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid md:grid-cols-2 gap-8 items-center ">
              
              <div>
                <p className="text-gray-400 leading-relaxed">
                  {text}
                </p>

                {foot && (
                  <p className="text-gray-500 mt-4">
                    {foot}
                  </p>
                )}
              </div>

              {image && (
                <div>
                  <img
                    src={image}
                    alt="content visual"
                    className="rounded-lg border border-slate-800"
                  />
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300 flex flex-col justify-center px-6  py-10 ">
      
      {/* HERO */}
      <section className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-green-400 font-mono mb-4"
        >
          &gt; Hola, soy Tito_
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Ing en sistemas de informacion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg text-gray-400 max-w-2xl"
        >
          este es un portafolio con proyectos personales e informacion sobre mi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
          >
            Ver proyectos
          </a>

          <a
            href="/cv.pdf"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-green-400 hover:text-green-400 transition"
          >
            Descargar CV
          </a>
        </motion.div>
      </section>

      {/* ABOUT EXPANDABLE */}
        <section className="mt-10 max-w-4xl space-y-4">
            <ExpandableAbout
            title="restaurante"
            text="Aplicación independiente diseñada para simplificar la gestión de pedidos en restaurantes. Olvídate del papel y los errores. Controla las comandas, sigue el estado de cada pedido en tiempo real y mejora la comunicación entre el salón y la cocina, todo desde una interfaz clara y fácil de usar. La solución perfecta para poner el foco en lo que importa: la comida y el cliente."
            foot=" Este proyecto de desarrollo independiente consiste en la creación de una aplicación web/móvil diseñada específicamente para optimizar la gestión de pedidos en un local de comida. La aplicación aborda los desafíos comunes de la operación diaria, como la lentitud en la toma de pedidos, los errores de comunicación en cocina y la dificultad para llevar un control del estado de cada comanda. Su objetivo es digitalizar y agilizar el flujo de trabajo desde que el cliente realiza el pedido hasta que este es entregado, mejorando la eficiencia del personal y la experiencia del cliente."
            image="../Assets/react.svg"
        />
        </section>
        <section className="mt-10 max-w-4xl space-y-4">
            <ExpandableAbout
            title="MalditoClub"
            text="Plataforma digital construida desde cero para Maldito Club, un proyecto radiofónico que buscaba un hogar en internet. lo ideamos junto a los chicos de maldito club que necesitaban entralizar toda su información, noticias y novedades en un solo espacio, creando un ecosistema digital. Esta es la solución perfecta para ordenar el caos creativo y conectar con su audiencia de manera directa y auténtica."
            foot={
                <div>
                    <a href="/malditoClub" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline mt-2 inline-block">
                        Inicio del desarrollo: 19/2/2026
                    </a>
                </div>
            }
            image={malditoImg}
        />
        </section>
        <section className="mt-10 max-w-4xl space-y-4">
            <ExpandableAbout
            title="Sobre mí"
            text="Soy desarrollador frontend enfocado en crear experiencias modernas, rápidas y escalables con React."
            foot="Me especializo en performance, arquitectura limpia y buenas prácticas."
            image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        />
        </section>

    </div>
  );
}