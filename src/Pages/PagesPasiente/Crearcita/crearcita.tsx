import React from "react";
import "./crearcita.css";
import FormController from "../../../Components/formcontrolers/formcontrollers";
import { CrearCitaPasiente, PasienteSchemasType, defaultValues } from "../../../schemas/pasienteSchemas/crearcita";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, DatePicker, TimePicker } from "rsuite";
 
const CrearCitaPasienteVista = () => {
  const methods = useForm<PasienteSchemasType>({
    resolver: zodResolver(CrearCitaPasiente),
    defaultValues: defaultValues,
  });
 
 const onsubmit = async (data: PasienteSchemasType) => {
    console.log("Datos crudos del formulario:", data);
 
    const h = data.horacita;
    const hh = String(h.getHours()).padStart(2, "0");
    const mm = String(h.getMinutes()).padStart(2, "0");
    const horaStr = `${hh}:${mm}`; // "HH:mm"
 
    const fechaStr = data.fechacita.toISOString().substring(0, 10);
 
    const payload = {
      motivo: data.Motivo,
      fecha: fechaStr,     // el backend la convierte a Date
      horacita: horaStr,   // string "HH:mm" para el backend
    };
 
    try {
      const response = await fetch("http://localhost:4000/api/citas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
 
      const result = await response.json();
      console.log("Respuesta backend:", result);
 
      if (!response.ok) {
        alert(result.message ?? "Error al crear la cita");
        return;
      }
 
      alert("Cita creada correctamente");
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("No se pudo conectar con el servidor");
    }
  };
 

  return (

    <div className="crear-cita-container">
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>
        <FormController
          name="Motivo"
          labelText="motivo de la cita"
          placeholder=""
        />
 
        <FormController
          as={DatePicker}
          name="fechacita"
          labelText="fecha"
          placeholder=""
        />
 
        <FormController
          as={TimePicker}
          name="horacita"
          labelText="hora"
          placeholder=""
        />
 
        <Button type="submit">Crear cita</Button>
      </form>
    </FormProvider>

    </div>
  );
};
 
export default CrearCitaPasienteVista;
 