import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CrearNuevoPasiente, defaultValues, PasienteSchemasType } from "../../schemas/pasienteSchemas/CrearNuevoPasiente/crearNuevopasiente";
import "./crearusuarionuevovistapasiente.css"
import {  Button, DatePicker, SelectPicker } from "rsuite";
import FormController from "../../Components/formcontrolers/formcontrollers";
const CrearUsuarioNuevoVistaPasiente = () => {
    
    const methods = useForm<PasienteSchemasType>({
        resolver: zodResolver(CrearNuevoPasiente),
        defaultValues: defaultValues
    }); 
   const onsubmit = (data: PasienteSchemasType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("form submit", data);
        resolve(true);
      }, 1000);
    });
  };
    
    return(
          <FormProvider {... methods}>
          <form onSubmit={methods.handleSubmit(onsubmit)}>
           <FormController 
           name= 'name'
           labelText='tu nombre'
           placeholder= 'ingresa tu nombre'
           />
            
           <FormController 
           name= 'lastname'
           labelText='apellodo'
           placeholder= 'ingresa tu apellido'
           />
          <FormController 
          as={DatePicker}
          
           name= 'fechaNacimiento'
           labelText='Ingresa tu fecha de nacimiento'
           placeholder= 'ingresa tu nombre'
           
           
           />
          <FormController 
          as={SelectPicker}
          data={[
            {label: 'Hombre', value: 'hombre' },
            {label: 'Mujer', value: 'mujer' }
          ]}
           name= 'sex'
           labelText='seleccione tu sexo'
           placeholder= 'seleccione tu sexo'
           
           
           />

           <FormController 
           name= 'email'
           labelText='email'
           placeholder= 'david@gmail.com'
           />

              <FormController 
           name= 'password'
           labelText='contraseña'
           placeholder= '.....'
           />
         <FormController 
           name= 'confirmPassword'
           labelText='confirmas contraseña'
           placeholder= '.....'
           />
            <Button type="submit">sum</Button>
        </form>

       
          </FormProvider>
    )
}

export default CrearUsuarioNuevoVistaPasiente;