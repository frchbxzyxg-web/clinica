import {z} from 'zod'

export const CrearNuevoPasiente = z.object({
    name: z.string().min(1, 'el nombre es requerido').regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, 'no se permiten estos caracteres raros'),
    lastname: z.string().min(1,'apellido requerido').regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, 'no se permiten estos caracteres'),
    sex: z.string().min(1, 'elegi un gnero'),
    fechaNacimiento: z.date(),
    email: z.email("email no valido").min(1, 'email requerido'),
    password: z.string().min(6, ' debe de tener 6 caracteres'),
    confirmPassword: z.string().min(6,"debe de tener 6 caracteres")
    
}).refine((data)=> data.password === data.confirmPassword, {
    path : ['confirmPassword'],
    message: 'la contraseña no coincide'
});

export type PasienteSchemasType = z.infer<typeof CrearNuevoPasiente>

export const defaultValues: PasienteSchemasType = {
name:'',
lastname: '',
sex:'',
fechaNacimiento: new Date(),
email: '',
password: '',
confirmPassword: ''

}