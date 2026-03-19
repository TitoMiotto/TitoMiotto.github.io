import { useState, useEffect } from "react";
import MiniNoticia from "./miniNoticia.jsx";
import Noticia from "./noticia2.jsx";
import { Noticias } from "./configuracion";

const Plantilla2noticias = () => {

    const handleNoticiaClick =(index) => {
        
        const noticia = Noticias[index];
        const noticiaString = encodeURIComponent(JSON.stringify(noticia));
        window.location.href = `/noticia/${index}?data=${noticiaString}`;
    };


    return(
        <div className="min-h-auto gap-2 max-w-4x1 p-4"> 
            
            <section>

                <div className="                   
                grid
                grid-cols-1
                md:grid-cols-[2fr_1fr]
                grid-rows-1
                gap-1
                ">
                    <div 
                        className="flex w-full md:h-[60vh] overflow-hidden cursor-pointer" 
                        onClick={() => handleNoticiaClick(3)}
                    >
                        <Noticia
                            titulo={Noticias[3].titulo}
                            texto={Noticias[3].texto}
                            imagenSrc={`/assets/${Noticias[3].imagen}`}
                        />

                    </div>
                
                <div className="flex flex-col p-2 gap-1">
                    {[4, 5, 6].map((index) => {
                        return (
                            <div 
                                key={index} 
                                onClick={() => handleNoticiaClick(index)}
                                className={`
                                    block border border-slate-800  
                                    md:h-[25vh] transition duration-300 
                                    hover:shadow-xl hover:scale-[1.01] 
                                    text-white overflow-hidden hover:ring-2 hover:ring-red-800 hover:ring-opacity-50
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
                </div>
            </section>
        </div>
    );
}

export default Plantilla2noticias;