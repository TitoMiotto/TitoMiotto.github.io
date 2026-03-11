import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useMotionValueEvent, useMotionValue } from 'framer-motion';

import logoExtendido from "../assets/logoExtendido.png";
import logoSmall from "../assets/logoSmall.png";
import logoTikTok from "../assets/tiktok.png";
import logoInstagram from "../assets/instagram.png";
import logoYoutube from "../assets/youtube.png";

function HeaderAnimado() {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
  { name: 'Home', href: '#', id: 1 },
  { name: 'Productos', href: '#', id: 2 },
  { name: 'Contacto', href: '#', id: 3 },
  { name: 'Login', href: '#', id: 4 }
];

  const LinksItems = [
  { logo: logoYoutube, href: 'https://www.youtube.com/@Ultraverselr', id: 1 },
  { logo: logoInstagram, href: 'https://www.instagram.com/malditoclub.ok/', id: 2 },
  { logo: logoTikTok, href: 'https://www.tiktok.com/%40malditoclub?fbclid=PAb21jcAQc1ntleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac0NGJsh-vKN_jrV6vdohKlFoa81Fwa665lwe1ZULp4LCuhRRX6nrrfZdsqsA_aem_T1o1GzP42K66y10u76fOoA', id: 3 },
];

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint de Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll redondeado
  const roundedScrollY = useMotionValue(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const rounded = Math.round(latest);
    if (Math.abs(rounded - roundedScrollY.get()) > 1) {
      roundedScrollY.set(rounded);
    }
  });

  // En móvil, desactivamos las animaciones de scroll para el header
  const scrollRange = [30, 150];
  
  // Usamos diferentes valores para móvil y desktop
  const headerHeight = useTransform(
    roundedScrollY, 
    scrollRange, 
    isMobile ? [60, 60] : [110, 60] // En móvil, altura fija
  );

  const opacityLarge = useTransform(
    roundedScrollY, 
    scrollRange, 
    isMobile ? [0, 0] : [1, 0] // En móvil, logo grande siempre invisible
  );
  
  const opacitySmall = useTransform(
    roundedScrollY, 
    scrollRange, 
    isMobile ? [1, 1] : [0, 1] // En móvil, logo pequeño siempre visible
  );

  const logoLeft = useTransform(
    roundedScrollY, 
    scrollRange, 
    isMobile ? ["16px", "16px"] : ["50%", "72px"] // En móvil, posición fija
  );

  const menuOpacity = useTransform(
    roundedScrollY, 
    scrollRange, 
    isMobile ? [1, 1] : [0, 1] // En móvil, menú siempre visible
  );

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full bg-white shadow-sm flex flex-col items-center"
        style={{ height: headerHeight }}
      >
        <div className="w-full h-full flex items-center">
          {/* BOTON MENU - Siempre clickeable */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl z-10 p-2"
            style={{ 
              opacity: menuOpacity,
              pointerEvents: 'auto' // Asegurar que sea clickeable
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </motion.button>

          {/* LOGO EXTENDIDO - Solo en desktop */}
          {!isMobile && (
            <motion.div className="absolute flex flex-col items-center justify-center"
                  style={{
                  opacity: opacityLarge,
                  left: "50%",
                  top: "50%",
                  translateX: "-50%",
                  translateY: "-50%"
                }}>
              <motion.img
                src={logoExtendido}
                className="h-16 w-auto"
              />

                <nav className="flex text-lg">
                  {LinksItems.map((item) => (
                    <a 
                      key={item.id}
                      href={item.href} 
                      className="hover:text-red-600 hover:shadow-xl hover:scale-[1.10] px-1 py-1"
                      onClick={() => setMenuOpen(false)} // cerrar menú al hacer click
                    >
                      {<motion.img
                        src={item.logo}
                        alt="content visual"
                        className="max-h-7 w-auto"
                      />}
                    </a>
                  ))}
                </nav>
            </motion.div>
          )}

          {/* LOGO ICONO - Para móvil siempre visible, para desktop animado */}
          <motion.img
            src={logoSmall}
            className={`absolute h-10 w-auto ${isMobile ? 'left-1/2 -translate-x-1/2' : ''}`}
            style={isMobile ? {
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%"
            } : {
              opacity: opacitySmall,
              left: logoLeft,
              top: "50%",
              translateY: "-50%"
            }}
          />
        </div>
      </motion.header>

      {/* MENU LATERAL - Mejorado para móvil */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* FONDO OSCURO */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* PANEL - Ancho responsivo */}
            <motion.div
              className="fixed top-0 left-0 h-full bg-white shadow-xl z-50 p-6"
              style={{ 
                width: isMobile ? '85%' : '256px', // 85% en móvil, 256px en desktop
                maxWidth: '300px' // Nunca más de 300px
              }}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <nav className="flex flex-col gap-6 text-lg mt-12">
                {menuItems.map((item) => (
                  <a 
                    key={item.id}
                    href={item.href} 
                    className="hover:text-red-600 hover:translate-x-1 transition px-2 py-1"
                    onClick={() => setMenuOpen(false)} // cerrar menú al hacer click
                  >
                  {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeaderAnimado;