import React from "react";
import HomeDoctor from "../../Pages/PagesDoctor/homedoctor";
import { Outlet } from "react-router-dom";
export default function LayoutDoctor(){
return(
    <>
    <HomeDoctor/>

    <Outlet />
    </>
)
}