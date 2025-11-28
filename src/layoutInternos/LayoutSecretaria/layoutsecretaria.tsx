import React from "react";
import { Outlet } from "react-router-dom";
import HomeSecretaria from "../../Pages/PagesSecretaria/homesecretaria";


export default function LayoutSecretria(){
    return(
        <>
        <Outlet />

        <HomeSecretaria />
        </>
    )
}