import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from '../Pages/Landing/landing'
import Login from '../Pages/Login/login'
import CrearUsuario from "../Pages/CrearUsuarioNuevo/CrearUsuario"
import AcercaNosotros from "../Pages/Landing/acerca_nosotros"

import LayoutSecretria from "../layoutInternos/LayoutSecretaria/layoutsecretaria";
import LayoutAdministrador from "../layoutInternos/LayoutAdministrador/layoutadministrador";
import LayoutDoctor from "../layoutInternos/LayoutDoctor/layoutdoctor";
import PublicLayout from '../Layout/PublicLayout';
import AuthLayout from '../Layout/AuthLayout';
import LayoutPasiente from "../layoutInternos/LayoutPasiente/layoutpasiente";

/* importaciones de pasiente*/
import HomePasiente from "../Pages/PagesPasiente/HomePasiente/homepasiente";


import HomeDoctor from "../Pages/PagesDoctor/homedoctor";

import HomeAdministrador from "../Pages/PagesAdmin/homeadministrador";
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
<Route path="/crearusuario" element={<CrearUsuario></CrearUsuario>}></Route>
</Route>

<Route element={<LayoutPasiente></LayoutPasiente>}>
<Route path="/homepasiente" element={<HomePasiente></HomePasiente>}></Route>
</Route>

<Route element={<LayoutDoctor></LayoutDoctor>}>

<Route path="/homedoctor" element={<HomeDoctor></HomeDoctor>}></Route>

</Route >

<Route element={<LayoutAdministrador></LayoutAdministrador>}>

<Route path="/homeadministrador" element={<HomeAdministrador></HomeAdministrador>}></Route>
</Route>

<Route element={<LayoutSecretria></LayoutSecretria>}>

<Route path="/homesecretaria" element={<HomeSecretaria></HomeSecretaria>}></Route>

</Route>


</Routes>



</BrowserRouter>
)
}
 