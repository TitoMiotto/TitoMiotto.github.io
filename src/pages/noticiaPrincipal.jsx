import HeaderAnimado from "./headerMC";
import { Noticias, Etiqueta } from "./configuracion";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const noticiaPrincipal = () => {
    const { id } = useParams(); // Obtiene el parámetro de la URL
    const [noticia, setNoticia] = useState(null);
    
    useEffect(() => {
        // Buscar la noticia por ID
        if (id && Noticias[id]) {
            setNoticia(Noticias[id]);
        }
    }, [id]);


    const Noticia = () => {
        return (
            <div className="flex flex-col h-auto overflow-hidden">
                {/* Título y etiqueta fuera del flujo de la imagen flotante */}
                <div className="flex flex-col mb-4 px-7">
                    {noticia.etiqueta && (
                        <span className="text-red-500/70 font-altehaas text-sm">
                            {`> ${Etiqueta[noticia.etiqueta].name}`}
                        </span>
                    )}
                    <h2 className="text-6xl font-deuschtlander tracking-wide text-white pt-4">
                        {noticia.titulo}
                    </h2>

                </div>
                
                {/* Contenedor con imagen flotante y texto */}
                <div className="relative px-7">
                    {noticia.imagen && (
                        <img
                            src={`/assets/${noticia.imagen}`}
                            alt="content visual"
                            className="w-full h-auto md:float-left md:h-[45vh] md:w-auto md:max-w-1/2 rounded-lg 
                                    transition-all duration-300 mb-4 md:mr-7 md:mb-4"
                        />
                    )}
                    
                    {/* Texto que fluye alrededor de la imagen */}
                    <div className="leading-relaxed space-y-4">
                        {noticia.texto.map((parrafo, idx) => (
                            <p key={idx} className="text-gray-300 leading-relaxed font-altehaas">
                                {parrafo}
                            </p>
                        ))}
                    </div>
                    
                    {/* Limpia el float */}
                    <div className="clear-both"></div>
                </div>
            </div>
        );
    };

    if (!noticia) {
        return <div className="min-h-screen bg-black text-white">Cargando...</div>;
    }

    return (
        <div className="min-h-screen bg-black"> 
            <HeaderAnimado />
            <div className="relative min-h-screen bg-black ">
                <div 
                    className="absolute inset-0 opacity-50 bg-repeat-y bg-center "
                    style={{ 
                        backgroundImage: `url('/assets/RS-Texture-01.jpg')`,
                        backgroundSize: 'cover'
                    }}
                />
                <div className="relative z-10 text-white">
                    <Noticia/>
                </div>
            </div>
        </div>
    );
};

export default noticiaPrincipal;