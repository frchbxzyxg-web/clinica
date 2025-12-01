import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormController from "../../../Components/formcontrolers/formcontrollers";
import { PagoCitaSecretaria, PagoSchemasType, defaultValues } from "../../../schemas/secretariaSchemas/vistapago/logicavistapago";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectPicker, DatePicker } from "rsuite";
const VistaPagoModal = () =>{
    
    const methods = useForm<PagoSchemasType>({
      resolver: zodResolver(PagoCitaSecretaria),
      defaultValues: defaultValues
    })
    return(
      <FormProvider {... methods}>
        <form>
          <FormController 
          as={SelectPicker}
          data={[
         { label: "Efectivo", value: "Efectivo"},
         { label: "Efectivo", value: "Efectivo"}
         ]}
          
          name = "TipoPago"
          labelText = "eliga el tipo de pago"
          />

          <FormController 
           name = "Monto"
           labelText = "ingrese el monton "
         />

           <FormController 
          as={DatePicker}
          name='fechapago'
          labelText='Fecha de pago'
          placeholder='DD/MM/YYYY'
        />
        </form>
      </FormProvider>
    )
}
export default VistaPagoModal