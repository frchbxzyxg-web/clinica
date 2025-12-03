import React from "react";
import { CrearUsuarioVistaSecretaria, PasienteSchemasType, defaultValues } from "../../../schemas/secretariaSchemas/crearusuariopasientevistasecretaria/crearusuariovistasecretaria";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormController from "../../../Components/formcontrolers/formcontrollers";
import {  Button, DatePicker, SelectPicker } from "rsuite";
 
const CrearNuevoPasienteVistaSecretaria = () => {
  const methods = useForm<PasienteSchemasType>({
    resolver: zodResolver(CrearUsuarioVistaSecretaria),
    defaultValues: defaultValues,
  });
 
  const onsubmit = async (data: PasienteSchemasType) => {
    console.log("Datos crudos del formulario (secretaria):", data);
 
    // Si fechaNacimiento es Date, lo convertimos a ISO corto
    const fechaStr = data.fechaNacimiento
      ? new Date(data.fechaNacimiento).toISOString().substring(0, 10)
      : null;
 
    // Construimos el payload para el backend de secretaria
    const payload = {
      PrimerNombre: data.PrimerNombre,
    SegundoNombre: data.SegundoNombre || null,
    Apellido: data.Apellido,
    SegundoApellido: data.SegundoApellido || null,
    sex: data.sex,                         // "hombre" o "mujer"
    fechaNacimiento: fechaStr,             // string "YYYY-MM-DD"
    Telefono: data.Telefono || null,
    TipoSangre: data.TipoSangre || null,
    email: data.email,
    UsuarioPasiente: data.UsuarioPasiente,
    password: data.password,
    confirmPassword: data.confirmPassword,
    };
 
    console.log("Payload enviado al backend (secretaria):", payload);
 
    try {
      const response = await fetch(
        "http://localhost:4000/api/secretaria",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
 
      const result = await response.json();
      console.log("Respuesta backend (secretaria):", result);
 
      if (!response.ok) {
        alert(result.message ?? "Error al registrar paciente");
        return;
      }
 
      alert("Paciente registrado correctamente por secretaria");
      methods.reset(); // limpia el formulario
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("No se pudo conectar con el servidor");
    }
  };
 
  return (
    <FormProvider {...methods}>
      <form className="form-grid" onSubmit={methods.handleSubmit(onsubmit)}>
        <FormController
          name="PrimerNombre"
          labelText="Primer nombre"
          placeholder="Ingresa el nombre"
        />
 
        <FormController
          name="SegundoNombre"
          labelText="Segundo nombre"
          placeholder=""
        />
 
        <FormController
          name="Apellido"
          labelText="Primer apellido"
          placeholder=""
        />
 
        <FormController
          name="SegundoApellido"
          labelText="Segundo apellido"
          placeholder=""
        />
 
        <FormController
          as={DatePicker}
          name="fechaNacimiento"
          labelText="Fecha de nacimiento"
          placeholder="DD/MM/YYYY"
        />
 
        <FormController
          as={SelectPicker}
          data={[
            { label: "Hombre", value: "hombre" },
            { label: "Mujer", value: "mujer" },
          ]}
          name="sex"
          labelText="Sexo"
        />
 
        <FormController
          name="Telefono"
          labelText="Teléfono"
          placeholder=""
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
            { label: "O-", value: "O-" },
          ]}
          name="TipoSangre"
          labelText="Tipo de sangre"
        />
 
        <FormController
          name="email"
          labelText="Email"
          placeholder=""
        />
 
        <FormController
          name="UsuarioPasiente"
          labelText="Nombre de usuario"
          placeholder="pepe04"
        />
 
        <FormController
          name="password"
          labelText="Contraseña"
          placeholder="....."
        />
 
        <FormController
          name="confirmPassword"
          labelText="Confirmar contraseña"
          placeholder="....."
        />
 
        <Button className="submit-btn" type="submit">
          Agregar Paciente
        </Button>
      </form>
    </FormProvider>
  );
};
 
export default CrearNuevoPasienteVistaSecretaria;
 