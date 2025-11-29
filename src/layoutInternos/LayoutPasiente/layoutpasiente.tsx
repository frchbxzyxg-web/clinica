import React from "react";
import { Outlet } from "react-router-dom";
import HeaderPasiente from "../../ComponentsInternos/ComponentsPasiente/header/headerpasiente";
import "./layoutpasiente.css"

export default function LayoutPasiente (){
    return(
<div>
    <HeaderPasiente />
        <div className= "container" style={{ marginTop: "120px" }}>

           
        </div>

    <Outlet />
</div>

    )
}