import React from "react";
import "./crearusuariovistaadministrador.css"
import { FormProvider,  useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CrearNuevoUsuario, UsuarioSchemasType, defaultValues } from "../../../schemas/administradorSchemas/crearcuevousuario/crearUsuarioaadministrador";
import FormController from "../../../Components/formcontrolers/formcontrollers";
import { Button, DatePicker, SelectPicker } from "rsuite";
const CrearUsuarioVistaAdministrador = () =>{

    const methods = useForm<UsuarioSchemasType>({
        resolver: zodResolver(CrearNuevoUsuario),
        defaultValues: defaultValues
    })

 const rolSeleccionado = methods.watch("Roles");

 return (

    <div className="modal-container">
  <div className="modal-card">

    <FormProvider {...methods}>
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
          name='Telefono'
          labelText='Teléfono'
        />

    

       <div className="space-y-4">

      {/* Select de Roles */}
      <FormController
        as={SelectPicker}
        data={[
          { label: "Doctor", value: "doctor" },
          { label: "Secretaria", value: "secretaria" },
          { label: "Administrador", value: "administrador" }
        ]}
        name='Roles'
        labelText='Seleccione el rol'
      />

      {/* Mostrar especialidad SOLO cuando el rol sea doctor */}
      {rolSeleccionado === "doctor" && (
        <FormController
          as={SelectPicker}
  data={[
    { label: "Pediatría", value: "pediatria" },
    { label: "Ginecología", value: "ginecologia" },
    { label: "Cardiología", value: "cardiologia" },
    { label: "Dermatología", value: "dermatologia" },
    { label: "Medicina General", value: "medicina_general" },
    { label: "Neurología", value: "neurologia" },
    { label: "Psiquiatría", value: "psiquiatria" },
    { label: "Traumatología", value: "traumatologia" },
    { label: "Anestesiología", value: "anestesiologia" },
    { label: "Otorrinolaringología", value: "otorrinolaringologia" },
    { label: "Oftalmología", value: "oftalmologia" },
    { label: "Reumatología", value: "reumatologia" }
  ]}
  name="Especialidad"
  labelText="Seleccione la especialidad"
  placeholder="Seleccione una especialidad"
  searchable
        />
      )}

    </div>

        
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
export default CrearUsuarioVistaAdministrador
