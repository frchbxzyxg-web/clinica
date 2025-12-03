import { z } from "zod";

export const citaCreateSchema = z.object({
  motivo: z.string().min(1, "El motivo es obligatorio"),

  // fecha puede venir como string (por JSON) o como Date (si algún día llamas desde otro lado)
  fecha: z.union([z.string(), z.date()]).transform((value) => {
    if (value instanceof Date) return value;
    const d = new Date(value);
    if (isNaN(d.getTime())) {
      throw new Error("Fecha inválida");
    }
    return d; // aquí ya queda como Date
  }),

  // horacita también puede venir como string o como Date
  horacita: z.union([z.string(), z.date()]).transform((value) => {
    // Si viene como Date (ej: desde TimePicker pasado directo)
    if (value instanceof Date) {
      const hh = String(value.getHours()).padStart(2, "0");
      const mm = String(value.getMinutes()).padStart(2, "0");
      return `${hh}:${mm}`; // lo convertimos a "HH:mm"
    }

    // Si viene como string, validamos formato "HH:mm"
    const str = value;
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!regex.test(str)) {
      throw new Error("Hora inválida (formato esperado HH:mm)");
    }
    return str; // dejamos "HH:mm"
  }),
});

export type CitaCreateInput = z.infer<typeof citaCreateSchema>;

