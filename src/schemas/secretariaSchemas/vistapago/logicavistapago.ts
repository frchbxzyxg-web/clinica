import {z} from 'zod'

export const PagoCitaSecretaria = z.object({
    TipoPago: z.string().min(1, 'seleccione tipo de pago'),
    Monto: z.number(),
    fechapago: z.date(),
  
     

});

export type PagoSchemasType = z.infer<typeof PagoCitaSecretaria>

export const defaultValues: PagoSchemasType = {
TipoPago:'',
Monto: 0,
fechapago: new Date(),


}