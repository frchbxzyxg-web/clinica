import React from "react";
import "./acerca_nosotros.css";

export default function AcercaNosotros(){
    return(
        <div className="acerca-container">
      <h1 className="acerca-title">Acerca de Nosotros</h1>

      <p className="acerca-text">
        En nuestro Consultorio Médico General trabajamos para brindar una atención 
        cálida, humana y accesible a todos nuestros pacientes. Contamos con profesionales 
        altamente capacitados y comprometidos con la salud, ofreciendo consultas generales, 
        emergencias y evaluaciones médicas con un servicio responsable y confiable.
      </p>

      <p className="acerca-text">
        Nuestro objetivo es garantizar el bienestar de cada persona mediante diagnósticos 
        oportunos, tratamientos adecuados y un acompañamiento constante. Creemos en la 
        medicina preventiva, la empatía y el compromiso con la comunidad.
      </p>
    </div>
    )
}