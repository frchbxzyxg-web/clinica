import {z} from 'zod'
 
export const CrearNuevoUsuario = z.object({
   PrimerNombre: z
  .string()
  .min(1, "El primer nombre es obligatorio.")
  .regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, "El primer nombre solo puede contener letras."),
 
SegundoNombre: z.string().min(1, "El segundo nombre es obligatorio.").regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, "El segundo nombre solo puede contener letras."),
 
Apellido: z
  .string()
  .min(1, "El apellido es obligatorio.")
  .regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, "El apellido solo puede contener letras."),
 
SegundoApellido: z
  .string()
  .min(1, "El segundo apellido es obligatorio.")
  .regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, "El segundo apellido solo puede contener letras."),
 
sex: z
  .string()
  .min(1, "Debe seleccionar un género."),


  Roles: z
  .string()
  .min(1, "escoge un rol"),
 
  Especialidad: z.string().optional().nullable(),
 
fechaNacimiento: z.date("debe de ingresarse la fecha"),


email: z
  .string()
  .email("Formato de correo electrónico inválido.")
  .min(1, "El correo electrónico es obligatorio."),
 
 
Telefono: z
  .string()
  .min(1, "El número de teléfono es obligatorio."),
 
  UsuarioPasiente: z.string().min(1, "El nombre de usuario es obligatorio."),
 
password: z
  .string()
  .min(6, "La contraseña debe tener al menos 6 caracteres."),
 
confirmPassword: z
  .string()
  .min(6, "La confirmación de contraseña debe tener al menos 6 caracteres.")
 
   
}).refine((data)=> data.password === data.confirmPassword, {
    path : ['confirmPassword'],
    message: 'la contraseña no coincide'
});
 
export type UsuarioSchemasType = z.infer<typeof CrearNuevoUsuario>
 
export const defaultValues: UsuarioSchemasType = {
PrimerNombre:'',
SegundoNombre: '',
Apellido:'',
SegundoApellido: '',
Especialidad: '',
Telefono: '',
Roles: '',
sex:'',
fechaNacimiento: new Date(),
email: '',
UsuarioPasiente: "",
password: '',
confirmPassword: ''
 
}