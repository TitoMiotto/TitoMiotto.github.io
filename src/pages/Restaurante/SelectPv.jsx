import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import configData from './configMock.json';
const tiposProductosData = configData.tiposProductosData;


const SelectPv = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [pedido, setPedido] = useState([]);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Obtener el pedido guardado en localStorage
        const pedidoGuardado = JSON.parse(localStorage.getItem("pedido")) || [];

        // Guardarlo en el estado
        setPedido(pedidoGuardado);

        // Hacer un log en consola
        console.log("Pedidos desde localStorage:", pedidoGuardado);
        
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  // Ajustar padding dinámicamente según la altura del footer
  useEffect(() => {
    if (footerRef.current) {
      setPaddingBottom(footerRef.current.clientHeight); // Agrega un margen extra
    }
  }, [pedido]);

return (
    <div className="mx-auto" style={{ paddingBottom: `${paddingBottom}px`}}>
        <div className="                   
            grid
            grid-cols-1
            md:grid-cols-[auto_400px_auto]
            grid-rows-1
            gap-1">
            <div className="w-full pt-20"></div>
            <div className="w-full pt-20">
                <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-10 flex items-center px-4 py-5">
                    <h1 className="text-4xl font-bold text-center w-full text-gray-600">
                        Carta
                    </h1>
                    <img src={`/assets/logo.png`} alt="Logo" className="h-18 right-0 fixed m-4 p-1" />
                </div>

                {loading ? (
                    <div className="w-full bg-white shadow-md px-4 py-2">
                        <div className="text-lg text-gray-700 text-center">
                        Cargando Carta...
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 mt-6 mb-4">
                        {tiposProductosData.map((tipo) => (
                        <div
                            key={tipo.id}
                            onClick={() => navigate(`/tipoProducto/${tipo.id}`)}
                            className="flex border border-gray-300 rounded-lg shadow-md h-[20vh] w-full cursor-pointer"
                        >
                        {/* Contenedor de texto (40%) */}
                        <div className="w-3/5 sm:w-2/5 px-4 flex flex-col justify-between py-3">
                        <p className=" text-center font-bold text-gray-800 uppercase line-clamp-2">
                            {tipo.nombre}
                        </p>
                        <p className="text-gray-600">
                            {tipo.cantidadProductos} platos posibles
                        </p>
                        </div>

                        {/* Contenedor de imagen (60%) */}
                        <div className="w-2/5 sm:w-3/5">
                        <img
                        
                            src={`/assets/${tipo.imagen}`}
                            alt={tipo.nombre}
                            className="h-full w-full object-cover rounded-r"
                        />
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
            {/* Caja Fija Inferior */}
            {pedido && pedido.length > 0 ?
            <div ref={footerRef} className="w-full fixed bottom-0 bg-white shadow-md border-t border-gray-200">
            <div className="flex items-center w-full justify-between px-8 py-6">
                <div className="flex flex-col">
                    <span className="text-gray-500 text-lg">
                        {pedido.length} {pedido.length === 1 ? "producto" : "productos"}
                    </span>
                    <span className="text-3xl font-semibold text-gray-800 lato">
                        ${new Intl.NumberFormat("es-ES").format(Math.floor(pedido.reduce((total, item) => total + (item.cantidad * item.subtotal), 0)))}
                        <sup className="text-lg">
                        {((pedido.reduce((total, item) => total + (item.cantidad * item.subtotal), 0)) % 1).toFixed(2).slice(2)}
                        </sup>
                    </span>
                    </div>
                        <button
                            className="bg-chetwodeblue-400 w-[65%] text-white font-bold text-xl p-4 rounded-xl transition-all duration-300 hover:bg-chetwodeblue-500 active:scale-95"
                            onClick={() => navigate("/carrito")}
                        >
                            Ver Pedido
                        </button>
                    </div>
                </div>
            :null}
            <div className="w-full pt-20"></div>
        </div>
    </div>);
};


export default SelectPv;