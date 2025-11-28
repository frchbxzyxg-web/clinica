import React from "react";
import { Link } from "react-router-dom";
import "./headersecretaria.css"

export default function HeaderSecretaria(){
    return(
         <header className="header">
              {/* LOGO + TÍTULO */}
              <div className="header__left">
                <img
                  src="/imagenes/Regina-04(este_es) 2.png"
                  alt="Logo consultorio"
                  className="header__logo"
                />
                <span className="header__title">Consultorio Médico General</span>
              </div>
        
              {/* MENÚ */}
              <nav className="header__nav">
                <Link to="/about">Acerca de nosotros</Link>
                <div className="header__dropdown">
                  <button className="dropdown__btn">Servicios ▾</button>
                  <div className="dropdown__menu">
                    <Link to="/servicio1">Consulta General</Link>
                    <Link to="/servicio3">Exámenes Médicos</Link>
                  </div>
                </div>
        
                
                <Link to="/contactos">Contactos</Link>
                <Link to="/notificaciones">Notificaciones</Link>
              </nav>
        
              {/* BOTÓN */}
              <Link to="/login" className="header__loginBtn">
                Iniciar Sesión
              </Link>
            </header>
    )
}