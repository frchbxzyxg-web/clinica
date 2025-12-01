import React from "react";
import "./hero.css";

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero_left">
             <h1>
                Atención médica general <br />
                para toda la familia. <br />
                Programa tu cita con <br />
                nosotr.
             </h1>

             <p className="hero_sub">
                 Tu bienestar y el de tu familia es nuestra prioridad diaria.
             </p>

             <button className="hero_btn">Agendar Cita</button>
            </div>

            <div className="hero_right">
              <img src="/imagenes/doctorImagen_2-removebg-preview.png" alt="Doctor" className="img1"/>
              <div className="hero_circulo"></div>
              <div className="hero_circulo1"></div>
              <div className="hero_circulo2"></div>
              <div className="hero_circulo3"></div>
              <div className="hero_circulo4"></div>
              <div className="hero_circulo5"></div>
              <div className="hero_circulo6"></div>
              <div className="hero_circulo7"></div>
              <div className="hero_circulo8"></div>
              <div className="hero_circulo9"></div>
              
            </div>
        </section>
    )
}