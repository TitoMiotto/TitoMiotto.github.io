
import HeaderAnimado from "./headerMC";
import Body from "./body";
import Banner from "./banner";
import Plantilla2noticias from "./plantilla2noticias";


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
            backgroundImage: `url('/assets/RS-Texture-01.jpg')`,
            backgroundSize: 'contain'  /* o 'contain' o un valor específico */
          }}
        />
        
        <div className="relative z-10 text-white">
          <div className="md:w-full md:h-[20vh]"></div>
          <Body/>
          <Banner/>
          <Plantilla2noticias/>
        </div>
      </div>

    </div>
  );
};


export default malditoClubEstandar;