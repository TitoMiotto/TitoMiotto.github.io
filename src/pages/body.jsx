import { useState, useEffect } from "react";
import { Noticias } from "./configuracion";
import { useNavigate, useParams } from "react-router-dom";

function MiniNoticia({ 
    titulo = "Título",
    imagenSrc = "https://picsum.photos/900/600"
}) {
    return (
        <section className="max-w-4xl border-b-7 border-r-2 border-[#A30000]/75 h-full rounded-3xl">

            <div className="flex flex-col bg-black h-full rounded-3xl">
                {imagenSrc && <img
                    src={imagenSrc}
                    alt="content visual"
                    className=" w-full h-auto md:w-auto md:max-h-[33vh] mb-2
                                object-cover transition-all duration-300 rounded-3xl"
                        // opcional, para limitar altura
                /> }

                <div className="mt-auto p-3">
                    <h2 className="text-2xl font-deuschtlander mb-1 tracking-wide text-white">{titulo}</h2>
                </div>
                
            </div>


        </section>
    );
}

function Body() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    // Detectar si es mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNoticiaClick =(index) => {
        
        const noticia = Noticias[index];
        if (noticia.Link) window.location.href = noticia.Link;
        navigate(`/noticia/${index}`);
    };

    return (
        <div className="min-h-auto p-3"> 
            <section className="flex flex-col items-center max-w-4x5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:min-h-[30vh] w-full">
                    {[1, 0, 2].map((index) => {
                        
                        return (
                            <div 
                                key={index} 
                                onClick={() => handleNoticiaClick(index)}
                                className={`
                                    block p-2 
                                    md:h-[50vh] transition duration-300 
                                    hover:shadow-xl hover:scale-[1.01] 
                                    text-white overflow-hidden
                                    cursor-pointer
                                    ${isMobile ? '' : 'cursor-pointer opacity-80 hover:opacity-100'}
                                `}
                            >
                                <MiniNoticia
                                    titulo={Noticias[index].titulo}
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