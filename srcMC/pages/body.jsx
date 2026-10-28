import { demoImage } from "../demoAssets";
import { useState, useEffect } from "react";
import { Noticias } from "./configuracion";
import { Link } from "react-router-dom"; // Importa Link

function MiniNoticia({ titulo, imagenSrc, introduccion }) {
    return (
        <section className="">
            <div className="flex flex-col bg-black h-full rounded-3xl">
                {imagenSrc && <img
                    src={imagenSrc}
                    alt="content visual"
                    className="w-full h-auto md:w-auto md:max-h-[35vh] mb-2 rounded-lg
                                object-contain transition-all duration-300 overflow-hidden"
                />}
                <div className="mt-auto p-3">
                    <h2 className="text-3xl font-deuschtlander mb-1 tracking-wide text-white">{titulo}</h2>
                    {!imagenSrc && <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-300">{introduccion}</p>}
                    <p className="mt-4 text-sm text-red-300">Leer noticia →</p>
                </div>
            </div>
        </section>
    );
}

function Body() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="min-h-auto p-3">
            <section className="flex flex-col items-center max-w-4x5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:min-h-[30vh] w-full">
                    {[1, 0, 2].map((index) => {
                        const noticia = Noticias[index];
                        // Determinar la URL según si tiene Link externo o es interna
                        const toPath = noticia.Link ? noticia.Link : `/maldito-club/noticia/${index}`;
                        const isExternal = !!noticia.Link;

                        return (
                            <Link
                                key={index}
                                to={toPath}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className={`
                                    block p-2 
                                    md:min-h-[16rem] transition duration-300
                                    hover:shadow-xl hover:scale-[1.01] 
                                    text-white
                                    cursor-pointer
                                    max-w-4xl border-b-7 border-r-2 border-[#A30000]/75 h-full rounded-3xl
                                    ${isMobile ? '' : 'opacity-80 hover:opacity-100'}
                                `}
                            >
                                <MiniNoticia
                                    titulo={noticia.titulo}
                                    introduccion={noticia.texto[0]}
                                    imagenSrc={demoImage(noticia.imagen)}
                                />
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Body;