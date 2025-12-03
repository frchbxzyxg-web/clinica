import { z } from "zod";
 
export const CrearUsuarioVistaSecretaria = z
  .object({
    PrimerNombre: z
      .string()
      .min(1, "El primer nombre es obligatorio.")
      .regex(
        /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/,
        "El primer nombre solo puede contener letras."
      ),
 
    SegundoNombre: z
      .string()
      .min(1, "El segundo nombre es obligatorio.")
      .regex(
        /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/,
        "El segundo nombre solo puede contener letras."
      ),
 
    Apellido: z
      .string()
      .min(1, "El apellido es obligatorio.")
      .regex(
        /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/,
        "El apellido solo puede contener letras."
      ),
 
    SegundoApellido: z
      .string()
      .min(1, "El segundo apellido es obligatorio.")
      .regex(
        /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/,
        "El segundo apellido solo puede contener letras."
      ),
 
    sex: z
      .string()
      .min(1, "Debe seleccionar un género."),
 
    // AHORA opcionales para que no rompan si no hay campo en el form
    Altura: z.string().optional(),
 
    fechaNacimiento: z.date("Debe ingresarse la fecha de nacimiento."),
 
    peso: z.string().optional(),
 
    email: z
      .string()
      .email("Formato de correo electrónico inválido.")
      .min(1, "El correo electrónico es obligatorio."),
 
    TipoSangre: z
      .string()
      .min(1, "Debe seleccionar un tipo de sangre."),
 
    Telefono: z
      .string()
      .min(1, "El número de teléfono es obligatorio."),
 
    UsuarioPasiente: z
      .string()
      .min(1, "El usuario es obligatorio.")
      .regex(
        /^[A-Za-z0-9_.-]+$/,
        "El usuario solo puede contener letras, números, puntos, guiones y guion bajo."
      ),
 
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres."),
 
    confirmPassword: z
      .string()
      .min(6, "La confirmación de contraseña debe tener al menos 6 caracteres."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "La contraseña no coincide",
  });
 
export type PasienteSchemasType = z.infer<typeof CrearUsuarioVistaSecretaria>;
 
export const defaultValues: PasienteSchemasType = {
  PrimerNombre: "",
  SegundoNombre: "",
  Apellido: "",
  SegundoApellido: "",
  Altura: "",
  peso: "",
  TipoSangre: "",
  Telefono: "",
  sex: "",
  fechaNacimiento: new Date(),
  email: "",
  UsuarioPasiente: "",
  password: "",
  confirmPassword: "",
};