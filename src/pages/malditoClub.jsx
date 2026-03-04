import { useEffect } from "react";
import logo from "../assets/react.svg";
import { useNavigate, useParams } from "react-router-dom";

const malditoClub = () => {

    const handleContinue = async () => {
        window.location.href = "http://localhost:5173/Home";

    };

return (
  <div className="flex flex-col justify-center">
    <div className="
      min-h-[40vh] 
      md:min-h-screen 
      grid 
      md:grid-cols-[30%_70%]
    ">

      {/* TEXTO */}
      <div className="
        flex flex-col 
        bg-red-500
        px-6 py-8
      ">
        <div>
          <h2 className="text-4xl font-bold">
            Bienvenido a Maldito Club
          </h2>

          <p className="text-gray-200 leading-relaxed mt-4">
            Comunicación irresponsable.
          </p>
        </div>

        <button onClick={handleContinue} className="bg-black text-white px-6 py-3 rounded-lg text-sm mt-8 md:mt-auto w-fit ">
          Whatsapp
        </button>
        <button onClick={handleContinue} className="bg-black text-white px-6 py-3 rounded-lg text-sm mt-1 w-fit ">
          Facebook
        </button>
        <button onClick={handleContinue} className="bg-black text-white px-6 py-3 rounded-lg text-sm mt-1 w-fit ">
          Instagram
        </button>
      </div>

      {/* IMAGEN */}
      <div className="hidden md:block">
        <img
          src="https://picsum.photos/600/400"
          alt="content visual"
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  <section className="mt-10 max-w-4xl px-6 py-6 ">
    <a
      href="/Home"
      className="block border border-slate-800 rounded-xl p-6 
                transition duration-300 hover:shadow-xl hover:scale-[1.01]"
    >
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="flex flex-col h-full">
          
          <div>
            <h2 className="text-2xl font-bold">
              Title
            </h2>

            <p className="text-gray-400 leading-relaxed mt-3">
              Text description here.
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-auto">
            Foot
          </p>

        </div>

        <div className="flex justify-center">
          <img
            src="https://picsum.photos/800/1000"
            alt="content visual"
            className="w-[80%] rounded-lg border border-slate-800"
          />
        </div>

      </div>
    </a>
  </section>

    <div className="
      min-h-screen
      grid
      grid-cols-1
      md:grid-cols-[2fr_1fr]
      grid-rows-[100px_auto_100px]
      gap-4
    ">
      <div className="bg-red-400"></div>
      <div className="bg-blue-400"></div>
      <div className="bg-green-400"></div>
      <div className="bg-yellow-400"></div>
      <div className="bg-black"></div>

    </div>
  </div>
)
};

export default malditoClub;