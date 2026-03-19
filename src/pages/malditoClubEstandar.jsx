import { useEffect } from "react";
import logo from "../assets/react.svg";

import logoExtendido from "../assets/logoExtendido.png";

import HeaderAnimado from "./headerMC";
import Body from "./body";
import Banner from "./banner";
import Plantilla2noticias from "./plantilla2noticias";


import { useNavigate, useParams } from "react-router-dom";

const malditoClubEstandar = () => {


  const navigate = useNavigate();
  const handleContinue = async () => {
    navigate("http://localhost:5173/Home")}

  const handleContinueTikTok = async () => {
    navigate("http://localhost:5173/Home")}


  return (
    // [#A30000]
    <div className="min-h-screen bg-black "> 

      <HeaderAnimado />
      <div className="md:w-full md:h-[20vh]"></div>
      <Body/>
        <div className="md:w-full md:h-[20vh]"></div>
      <Banner/>

      <Plantilla2noticias/>

    </div>
  );
};


export default malditoClubEstandar;