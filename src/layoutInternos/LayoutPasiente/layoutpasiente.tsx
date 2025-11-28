import React from "react";
import HomePasiente from "../../Pages/PagesPasiente/HomePasiente/homepasiente";
import { Outlet } from "react-router-dom";
export default function LayoutPasiente (){
    return(
<>
<Outlet />
<HomePasiente />
</>
    )
}