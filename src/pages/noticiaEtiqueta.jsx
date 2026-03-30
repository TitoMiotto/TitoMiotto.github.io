
import HeaderAnimado from "./headerMC";
import { Noticias, Etiqueta } from "./configuracion";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Banner from "./banner";



const noticiaEtiqueta = () => {
    const { etiqueta } = useParams();

    const [todas, setTodas] = useState([]);
    const [pagina, setPagina] = useState(1);

    const POR_PAGINA = 8;

    useEffect(() => {
        if (etiqueta !== undefined && Noticias.length > 0) {
            const filtradas = Noticias.filter(
                n => n.etiqueta === parseInt(etiqueta, 10)
            );

            setTodas(filtradas);
            setPagina(1); // reset al cambiar etiqueta
        }
    }, [etiqueta]);

    // cálculo de paginación
    const inicio = (pagina - 1) * POR_PAGINA;
    const fin = inicio + POR_PAGINA;

    const noticias = todas.slice(inicio, fin);
    const totalPaginas = Math.ceil(todas.length / POR_PAGINA);

    const Noticia = ({ noticia }) => {
        return (
            <div className="flex flex-col h-auto overflow-hidden mb-16">
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

                <div className="relative px-7">
                    {noticia.imagen && (
                        <img
                            src={`/assets/${noticia.imagen}`}
                            alt="content visual"
                            className="w-full h-auto md:float-left md:h-[45vh] md:w-auto md:max-w-1/2 rounded-lg 
                            transition-all duration-300 mb-4 md:mr-7 md:mb-4"
                        />
                    )}

                    <div className="leading-relaxed space-y-4">
                        {noticia.texto.map((parrafo, idx) => (
                            <p key={idx} className="text-gray-300 font-altehaas">
                                {parrafo}
                            </p>
                        ))}
                    </div>

                    <div className="clear-both"></div>
                </div>
            </div>
        );
    };

    if (!todas.length) {
        return <div className="min-h-screen bg-black text-white">Cargando...</div>;
    }

    return (
        <div className="min-h-screen bg-black"> 
            <HeaderAnimado />

            <div className="relative min-h-screen bg-black">
                {/* Fondo */}
                <div 
                    className="absolute inset-0 opacity-50 bg-repeat-y bg-center"
                    style={{ 
                        backgroundImage: `url('/assets/RS-Texture-01.jpg')`,
                        backgroundSize: 'cover'
                    }}
                />

                {/* CONTENIDO */}
                <div className="relative z-10 text-white">

                    {/* SOLO EN PAGINA 1 → noticia principal */}
                    {pagina === 1 && noticias[0] && (
                        <>
                            <Noticia noticia={noticias[0]} />
                            <Banner/>
                        </>
                    )}

                    {/* LISTA */}
                    <div className="gap-16 mt-16 md:px-17 flex flex-col">
                        {noticias
                            .slice(pagina === 1 ? 1 : 0)
                            .map((n, i) => (
                                <Noticia 
                                    key={i} 
                                    noticia={{ ...n, etiqueta: null }} 
                                />
                        ))}
                    </div>

                    {/* PAGINACION */}
                    <div className="flex justify-center items-center gap-6 mt-10 pb-10">
                        <button
                            onClick={() => setPagina(p => p - 1)}
                            disabled={pagina === 1}
                            className="px-4 py-2 bg-red-900 text-white disabled:opacity-50"
                        >
                            Anterior
                        </button>

                        <span className="text-white">
                            Página {pagina} de {totalPaginas}
                        </span>

                        <button
                            onClick={() => setPagina(p => p + 1)}
                            disabled={pagina === totalPaginas}
                            className="px-4 py-2 bg-red-900 text-white disabled:opacity-50"
                        >
                            Siguiente
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default noticiaEtiqueta;