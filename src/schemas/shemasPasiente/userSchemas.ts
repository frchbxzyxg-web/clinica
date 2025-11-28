import {  z} from 'zod'

export const UserSchemas = z.object({
    name: z.string().min(1, 'el nombre es requerido').regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, 'no se permiten estos caracteres'),
    lastname: z.string().min(1,'apellido requerido').regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, 'no se permiten estos caracteres'),
    sex: z.boolean("elegi uno"),
    fechaNacimiento: z.date(),
    email: z.email("email no valido").min(1, 'email requerido'),
    password: z.string().min(6, ' debe de tener 6 caracteres'),
    confirmPassword: z.string().min(6,"debe de tener 6 caracteres")
    
}).refine((data)=> data.password === data.confirmPassword, {
    path : ['confirmPassword'],
    message: "la contraseña no coinciden"
});

export type UserSchemasType = z.infer<typeof UserSchemas>

export const defaultValues: UserSchemasType = {
name:'',
lastname: '',
sex: true,
fechaNacimiento: new Date(),
email: '',
password: '',
confirmPassword: ''

}