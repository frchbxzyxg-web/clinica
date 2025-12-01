import {z} from 'zod'

export const CrearCitaPasiente = z.object({
    Motivo: z.string().min(1, 'el nombre es requerido').regex(/^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/, 'no se permiten estos caracteres raros'),
    fechacita: z.date(),
    horacita: z.date()

   
});

export type PasienteSchemasType = z.infer<typeof CrearCitaPasiente>

export const defaultValues: PasienteSchemasType = {
Motivo:'',
fechacita: new Date(),
horacita: new Date()



}
