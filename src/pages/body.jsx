import { useState, useEffect } from "react";
import MiniNoticia from "./miniNoticia.jsx";
import Noticia from "./noticia2.jsx";
import { Noticias } from "./configuracion";

function Body() {
    const [noticiaActiva, setNoticiaActiva] = useState(0); // Inicializamos con el índice 1 (la del medio)
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNoticiaClick = (index, e) => {
        e.preventDefault(); // Prevenimos la navegación por defecto
        
        if (isMobile) {
            // En mobile: redirigir a página de noticia
            // Aquí pasamos los datos de la noticia como parámetros en la URL
            const noticia = Noticias[index];
            const noticiaString = encodeURIComponent(JSON.stringify(noticia));
            window.location.href = `/noticia/${index}?data=${noticiaString}`;
        } else {
            // En desktop: actualizar el carrusel
            setNoticiaActiva(index);
        }
    };

    const handleNoticiaPrincipalClick = (e) => {
        e.preventDefault();
        
        // En ambos casos, redirigir a la página de la noticia activa
        const noticia = Noticias[noticiaActiva];
        const noticiaString = encodeURIComponent(JSON.stringify(noticia));
        window.location.href = `/noticia/${noticiaActiva}?data=${noticiaString}`;
    };

    return (
        <div className="min-h-auto p-3"> 
            <section className="flex flex-col items-center max-w-4x5">
                {/* Noticia principal */}
                <div 
                    className="flex w-full md:h-[60vh] overflow-hidden cursor-pointer" 
                    onClick={handleNoticiaPrincipalClick}
                >
                    <Noticia
                        titulo={Noticias[noticiaActiva].titulo}
                        texto={Noticias[noticiaActiva].texto}
                        imagenSrc={`/assets/${Noticias[noticiaActiva].imagen}`}
                    />
                </div>

                {/* Grid de mini noticias */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:min-h-[30vh] w-full">
                    {[1, 0, 2].map((index) => { // Cambiado a [0,1,2] para incluir la primera también
                        // En desktop, resaltamos la noticia activa
                        const isActive = !isMobile && noticiaActiva === index;
                        
                        return (
                            <div 
                                key={index} 
                                onClick={(e) => handleNoticiaClick(index, e)}
                                className={`
                                    block border border-slate-800 p-2 
                                    md:h-[25vh] transition duration-300 
                                    hover:shadow-xl hover:scale-[1.01] 
                                    text-white overflow-hidden
                                    ${isMobile ? '' : 'cursor-pointer'}
                                    ${isActive ? 'ring-2 ring-red-800 ring-opacity-50' : 'opacity-80 hover:opacity-100'}
                                `}
                            >
                                <MiniNoticia
                                    titulo={Noticias[index].titulo}
                                    introduccion={Noticias[index].introduccion}
                                    imagenSrc={`/assets/${Noticias[index].imagen}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Body;