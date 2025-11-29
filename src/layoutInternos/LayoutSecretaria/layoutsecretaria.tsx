import React from "react";
import { Outlet } from "react-router-dom";
import "./layoutsecretaria.css"
import HeaderSecretaria from "../../ComponentsInternos/ComponentsSecretaria/header/headersecretaria";

export default function LayoutSecretria(){
    return(
        <>
      <HeaderSecretaria />

      <div className= "container" style={{ marginTop: "120px" }}>

           
        </div>
<Outlet />
        </>
        
    )
}