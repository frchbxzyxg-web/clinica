import React from "react";
import Header from "../../Components/Header/header";
import Hero from "../../Components/hero/hero"
import "./landing.css"
export default function Landing() {
   return (
      <div>
         <Header />

         <div className= "container" style={{ marginTop: "120px" }}>
           

         <Hero />
         </div>
      </div>
   );
}
