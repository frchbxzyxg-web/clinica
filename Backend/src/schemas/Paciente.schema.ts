import { z } from "zod";

export const pacienteRegisterSchema  = z.object({
  PrimerNombre: z.string().min(1, "El primer nombre es requerido"),
  SegundoNombre: z.string().optional().nullable(),
  Apellido: z.string().min(1, "El primer apellido es requerido"),
  SegundoApellido: z.string().optional().nullable(),
  sex: z.string().min(1, "El sexo es requerido"),
  fechaNacimiento: z.string().or(z.date()).transform((value) => {
        if (value instanceof Date) return value;
        return new Date(value);
      }),
  Telefono: z.string().optional().nullable(),
  TipoSangre: z.string().optional().nullable(),
  email: z.string().email(),
  UsuarioPasiente: z.string().min(1, "El nombre de usuario es requerido"),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine(d => d.password === d.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
});

export type PacienteRegisterInput = z.infer<typeof pacienteRegisterSchema>;
