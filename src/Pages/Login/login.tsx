import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login__container">

      <div className="login__card">
        <h2 className="login__title">Iniciar Sesión</h2>

        {/* FORMULARIO */}
        <form className="login__form">

          <label>Nombre de usuario</label>
          <input type="text" placeholder="Usuario" />

          <label>Contraseña</label>
          <input type="password" placeholder="••••••••" />

          <button type="submit" className="login__btn">
            Entrar
          </button>

        </form>

        {/* OPCIONES */}
        <div className="login__links">
          <Link to="/forgot">¿Olvidaste tu contraseña?</Link>
          <Link to="/crearusuariopasientevista">Crear una cuenta</Link>
        </div>
      </div>

    </div>
  );
}
