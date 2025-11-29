import React from "react";
import HeaderDoctor from "../../ComponentsInternos/ComponentsDoctor/header/headerdoctor";
import "./layoutdoctor.css"
export default function LayoutDoctor(){
return(
    <>
   <div>
            <HeaderDoctor />
                <div className= "container" style={{ marginTop: "120px" }}></div>
            
        </div>
    </>
)
}