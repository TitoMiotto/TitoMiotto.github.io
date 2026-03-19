function MiniNoticia({ 
    titulo = "Título",
    introduccion = [],
    imagenSrc = "https://picsum.photos/900/600"
}) {
    return (
        <section className="max-w-4xl">
            
            {/* Contenedor del texto con imagen flotante */}
            <div className="relative ">
                {imagenSrc && <img
                    src={imagenSrc}
                    alt="content visual"
                    className=" w-full h-auto md:float-right md:h-[22vh] md:w-auto md:max-w-1/2 mb-2 rounded-lg border border-slate-800
                                object-contain transition-all duration-300"
                        // opcional, para limitar altura
                /> }

                
                {/* Texto que fluye alrededor de la imagen */}
                <div className="leading-relaxed">
                    <h2 className="text-2xl font-deuschtlander mb-1 tracking-wide text-white">{titulo}</h2>
                    <p className="font-altehaas overflow-hidden text-gray-300">{introduccion}</p>
                </div>
                
                {/* Este div vacío limpia el float para que el fondo no se escape */}
                <div className="clear-both"></div>
            </div>


        </section>
    );
}

export default MiniNoticia;