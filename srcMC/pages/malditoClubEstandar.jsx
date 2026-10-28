
import HeaderAnimado from "./headerMC";
import Body from "./body";
import Banner from "./banner";
import Plantilla2noticias from "./plantilla2noticias";
import Noticia from "./NewsArticle";
import { Noticias, Banners } from "./configuracion";


const malditoClubEstandar = () => {


  return (
    // [#A30000]
    <div className="min-h-screen bg-black "> 

      <HeaderAnimado />
      <div className="relative min-h-screen bg-black">
          {/* Imagen superior */}
        <div 
          className="absolute inset-0 opacity-50 
                    bg-repeat-y bg-center"
          style={{ 
            backgroundImage: "radial-gradient(ellipse at top, #280b0b, #000 70%)",
            backgroundSize: 'contain'  /* o 'contain' o un valor específico */
          }}
        />
        
        <div className="relative z-10 text-white">
          <div className="h-6 md:h-10"></div>
          <Body/>
          <div className="h-6 md:h-10"></div>
          
          <Banner banner={Banners[0]} />
          <div className="h-6 md:h-10"></div>
          <Plantilla2noticias/>
          <div className="h-6 md:h-10"></div>
          <Banner banner={Banners[1]} />
          <Noticia noticia={Noticias[7]} />
          <Noticia noticia={Noticias[8]} />
          <Noticia noticia={Noticias[9]} />
          <Noticia noticia={Noticias[10]} />
          <div className="h-10"></div>
        </div>
      </div>

    </div>
  );
};


export default malditoClubEstandar;