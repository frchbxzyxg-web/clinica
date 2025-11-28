import React from "react";
import { Outlet } from "react-router-dom";
import HomeAdministrador from "../../Pages/PagesAdmin/homeadministrador";

export default function LayoutAdministrador(){
    return(
        <>
        <Outlet />
        <HomeAdministrador />
        </>
    )
}