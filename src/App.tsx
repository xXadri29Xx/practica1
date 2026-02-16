import { useState } from "react";
import "./App.css";
import logo from "./assets/header.png";
import buy from "./assets/korvo-car.png";
import sold from "./assets/car-sold.png";
import backcar from "./assets/rainbow-arrow.gif";
import bichos from "./assets/fam-photo.png";
import error from "./assets/bad-gateway.png"
import axios from "axios";

const App = () => {
  const [mensaje, setMensaje] = useState("Click Here");

const handleClick = async () => {
  const totalLlamadas = 5; 
  const delay: number[] = [50, 150, 250, 350, 450]
  try {
    for (let i = 0; i < totalLlamadas; i++) {
      const res = await axios.get("https://lessons-api.vercel.app/");
      setMensaje(res.data.wisdom || "No hay mensaje");

      await new Promise((resolve) => setTimeout(resolve, delay[i]));
    }
  } catch {
    setMensaje("Error al obtener el mensaje");
  }
};

  return (
    <div className="app">
      <div className="main">
        <div className="header">
          <img src={logo}/>
        </div>
        <div className="content">
          <div className="margin"/>
          <div className="content-inner">
            <div className="content-left">
              <img className="img" src={buy}/>
              <img className="flecha" src={backcar}/>
              <img className="img" src={sold}/>
            </div>
            <div >
              <button className="button" onClick={handleClick}>{mensaje}</button>
            </div>
            <div className="content-right">
              <img src={bichos} />
              <p className="texto">* THIS SITE DESIGNED BY THE SOLAR OPPOSITES</p>
            </div>
          </div>
          <div id="coin">
            <img src={error}/>
          </div>
        </div>
      </div>
      <div className="fire">
      </div>
    </div>
  );
};

export default App;
