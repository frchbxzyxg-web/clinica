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
       <div className="modal-container">
  <div className="modal-card">

    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)} className="form-grid">

        {/* --- TUS CAMPOS (NO LOS TOCO) --- */}

        <FormController 
          name='PrimerNombre'
          labelText='Primer nombre'
          placeholder='ingresa tu nombre'
        />

        <FormController 
          name='SegundoNombre'
          labelText='Segundo nombre'
          placeholder=''
        />

        <FormController 
          name='Apellido'
          labelText='Primer apellido'
          placeholder=''
        />

        <FormController 
          name='SegundoApellido'
          labelText='Segundo apellido'
          placeholder=''
        />

        <FormController 
          as={DatePicker}
          name='fechaNacimiento'
          labelText='Ingresa tu fecha de nacimiento'
          placeholder='DD/MM/YYYY'
        />

        <FormController 
          as={SelectPicker}
          data={[
            { label: "Hombre", value: "hombre"},
            { label: "Mujer", value: "mujer"}
          ]}
          name='sex'
          labelText='Seleccione tu sexo'
        />

        <FormController 
          name='Edad'
          labelText='Edad'
        />

        <FormController 
          name='Telefono'
          labelText='Teléfono'
        />

        <FormController 
          as={SelectPicker}
          data={[
            { label: "A+", value: "A+" },
            { label: "A-", value: "A-" },
            { label: "B+", value: "B+" },
            { label: "B-", value: "B-" },
            { label: "AB+", value: "AB+" },
            { label: "AB-", value: "AB-" },
            { label: "O+", value: "O+" },
            { label: "O-", value: "O-" }
          ]}
          name='TipoSangre'
          labelText='Seleccione el tipo de sangre'
        />

        <FormController 
          name='email'
          labelText='Email'
        />

         <FormController 
          name='UsuarioPasiente'
          labelText='Nombre de usuario'
          placeholder='pepe04'
        />

        <FormController 
          name='password'
          labelText='Contraseña'
          placeholder='.....'
        />

        <FormController 
          name='confirmPassword'
          labelText='Confirmar contraseña'
          placeholder='.....'
        />

        <Button className="submit-btn" type="submit">Agregar Paciente</Button>

      </form>
    </FormProvider>

  </div>
</div>
    )
}

export default CrearUsuarioNuevoVistaPasiente;