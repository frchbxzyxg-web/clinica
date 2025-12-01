import React from "react";
import { CrearUsuarioVistaSecretaria, PasienteSchemasType, defaultValues } from "../../../schemas/secretariaSchemas/crearusuariopasientevistasecretaria/crearusuariovistasecretaria";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormController from "../../../Components/formcontrolers/formcontrollers";
import {  Button, DatePicker, SelectPicker } from "rsuite";
const CrearNuevoPasienteVistaSecretaria = () =>{
    const methods = useForm<PasienteSchemasType>({
            resolver: zodResolver(CrearUsuarioVistaSecretaria),
            defaultValues: defaultValues
        }); 
    
    
    return(

    <FormProvider {... methods}>
        <form  className="form-grid">

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
          as={SelectPicker}
          data={[
            { label: "Hombre", value: "hombre"},
            { label: "Mujer", value: "mujer"}
          ]}
          name='sex'
          labelText='Seleccione tu sexo'
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
      

    )
}
export default CrearNuevoPasienteVistaSecretaria