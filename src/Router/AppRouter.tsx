import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from '../Pages/Landing/landing'
import Login from '../Pages/Login/login'

import AcercaNosotros from "../Pages/Landing/acerca_nosotros"
import CrearUsuarioNuevoVistaPasiente from "../Pages/CrearUsuarioNuevo/crearusuarionuevovistapasiente";
import LayoutSecretria from "../layoutInternos/LayoutSecretaria/layoutsecretaria";
import LayoutAdministrador from "../layoutInternos/LayoutAdministrador/layoutadministrador";
import LayoutDoctor from "../layoutInternos/LayoutDoctor/layoutdoctor";
import PublicLayout from '../Layout/PublicLayout';
import AuthLayout from '../Layout/AuthLayout';
import LayoutPasiente from "../layoutInternos/LayoutPasiente/layoutpasiente";

import CrearUsuarioVistaAdministrador from "../Pages/PagesAdmin/CrearUsuarioVistaAdministrador/crearusuariovistaadministrador";

/* importaciones de pasiente*/
import HomePasiente from "../Pages/PagesPasiente/HomePasiente/homepasiente";

import CrearCita from "../Pages/PagesPasiente/Crearcita/crearcita";

/** importaciones de doctor */
import HomeDoctor from "../Pages/PagesDoctor/homedoctor";


/** importaciones de administrador */
import HomeAdministrador from "../Pages/PagesAdmin/homeadministrador";

/** importaciones de secretaria */
import HomeSecretaria from "../Pages/PagesSecretaria/homesecretaria";

export default function AppRouter() {
return(
<BrowserRouter>
<Routes >
    {/* pagina inicial*/}

<Route element={<PublicLayout></PublicLayout>} >

 <Route path="/" element={<Landing></Landing>}></Route>

<Route path="/about" element={<AcercaNosotros></AcercaNosotros>}></Route>

</Route>

{/* en este route se guarda todas las rutas de las vistas internas */}

<Route element={<AuthLayout></AuthLayout>}>

<Route path="/login" element={<Login></Login> }></Route>
<Route path="/crearusuariopasientevista" element={<CrearUsuarioNuevoVistaPasiente></CrearUsuarioNuevoVistaPasiente>}></Route>

</Route>

<Route element={<LayoutPasiente></LayoutPasiente>}>

<Route path="/homepasiente" element={<HomePasiente></HomePasiente>}></Route>
<Route path="/crearcita" element={<CrearCita></CrearCita>}></Route>

</Route>

<Route element={<LayoutDoctor></LayoutDoctor>}>

<Route path="/homedoctor" element={<HomeDoctor></HomeDoctor>}></Route>

</Route >

<Route element={<LayoutAdministrador></LayoutAdministrador>}>

<Route path="/homeadministrador" element={<HomeAdministrador></HomeAdministrador>}></Route>
<Route path="/homeadministrador/CrearUsuarioVistaAdministrador" element={<CrearUsuarioVistaAdministrador></CrearUsuarioVistaAdministrador>}></Route>

</Route>

<Route element={<LayoutSecretria></LayoutSecretria>}>

<Route path="/homesecretaria" element={<HomeSecretaria></HomeSecretaria>}></Route>

</Route>


</Routes>



</BrowserRouter>
)
}
 