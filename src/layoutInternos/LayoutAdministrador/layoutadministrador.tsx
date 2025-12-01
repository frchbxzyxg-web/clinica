import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdministrador from "../../ComponentsInternos/ComponentsAdminstrador/header/headeradministradror";
import "./layoutadministrador.css"
export default function LayoutAdministrador(){
    return(
        <>
       <HeaderAdministrador />
       <div className= "container" style={{ marginTop: "120px" }}>

  
    </div>
   <Outlet />
        </>
    )
}