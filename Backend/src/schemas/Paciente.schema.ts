import { z } from "zod";

export const pacienteRegisterSchema  = z.object({
  name: z.string().min(1),
  lastname: z.string().min(1),
  sex: z.string().min(1, "El sexo es requerido"),
  fechaNacimiento: z.string().or(z.date()).transform((value) => {
        if (value instanceof Date) return value;
        return new Date(value);
      }),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine(d => d.password === d.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
});

export type PacienteRegisterInput = z.infer<typeof pacienteRegisterSchema>;
