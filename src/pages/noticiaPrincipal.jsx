import HeaderAnimado from "./headerMC";
import { Noticias, Etiqueta } from "./configuracion";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Banner from "./banner";


const noticiaPrincipal = () => {
    const { id, etiqueta } = useParams(); // Obtiene el parámetro de la URL
    const [noticias, setNoticias] = useState(null);
    
    useEffect(() => {
        if (id !== undefined && Noticias.length > 0) {
            const index = parseInt(id);
            setNoticias(Noticias.slice(index, index + 8));
        }
    }, [id]);


    const Noticia = ({noticia}) => {
        return (
            <div className="flex flex-col h-auto overflow-hidden mb-16">
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

    if (!noticias) {
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
                    <Noticia noticia={noticias[0]} />
                    <Banner/>
                </div>
                <div className="relative z-10 text-white gap-16 mt-16 md:px-17 flex flex-col">
                    {noticias.slice(1).map((n, i) => (
                        <Noticia key={i} noticia={{ ...n, etiqueta: null }} />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default noticiaPrincipal;