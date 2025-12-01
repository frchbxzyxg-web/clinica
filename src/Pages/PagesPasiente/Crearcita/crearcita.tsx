import React from "react";
import "./crearcita.css";
import FormController from "../../../Components/formcontrolers/formcontrollers";
import { CrearCitaPasiente,  defaultValues, PasienteSchemasType } from "../../../schemas/pasienteSchemas/crearcita";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, DatePicker, TimePicker } from "rsuite";


const CrearCitaPasienteVista = () =>{
const methods = useForm<PasienteSchemasType>({
        resolver: zodResolver(CrearCitaPasiente),
        defaultValues: defaultValues
    }); 



    return(
   <FormProvider {... methods} >
    <form>
      <FormController 
           name= 'Motivo'
           labelText='motivo de la cita'
           placeholder= ''
           

           />
            <FormController 
            as={DatePicker}
           name= 'fechacita'
           labelText=' fecha'
           placeholder= ''
           
           />

            <FormController 
            as={TimePicker}
           name= 'horacita'
           labelText=' Hora cita'
           
            disabledHours={() => {
            const horasPermitidas = [9, 10, 11, 12, 13];
            return Array.from({ length: 24 }, (_, h) => h).filter(h => !horasPermitidas.includes(h));
             }}
           />
         
            
           <Button type="submit">Crear cita</Button>
     </form>

   </FormProvider>
)


}
export default CrearCitaPasienteVista 

