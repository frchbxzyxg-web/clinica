import { z } from "zod";

export const usuarioGeneralRegisterSchema = z
  .object({
    PrimerNombre: z.string().min(1, "El primer nombre es requerido"),
    SegundoNombre: z.string().optional().nullable(),

    Apellido: z.string().min(1, "El primer apellido es requerido"),
    SegundoApellido: z.string().optional().nullable(),

    fechaNacimiento: z
      .string()
      .or(z.date())
      .optional()
      .transform((value) => {
        if (!value) return null;
        if (value instanceof Date) return value;
        return new Date(value);
      }),

    sex: z.string().min(1, "El sexo es requerido"), // ya viene "M" / "F"

    Telefono: z.string().optional().nullable(),

    Roles: z.enum(["doctor", "secretaria", "administrador"] as const, {
        message: "El rol es requerido",
    }),

    Especialidad: z.string().optional().nullable(), // solo se usa si es doctor

    email: z.string().email("Correo no válido"),

    UsuarioPasiente: z.string().min(1, "El nombre de usuario es requerido"),

    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación es requerida"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  })
  .refine(
    (d) => d.Roles !== "doctor" || !!d.Especialidad,
    {
      path: ["Especialidad"],
      message: "La especialidad es requerida para el rol doctor",
    }
  );

export type UsuarioGeneralRegisterInput = z.infer<
  typeof usuarioGeneralRegisterSchema
>;
