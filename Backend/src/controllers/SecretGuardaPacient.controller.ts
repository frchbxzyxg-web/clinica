import { Request, Response } from "express";
import {
  SecretGuardaPacientSchema,
  SecretGuardaPacienteInput,
} from "../schemas/SecretGuardaPacient.schema";
import { PatientService } from "../services/SecretGuardaPacient.service";

export class SecretGuardaPacientController {
  static async register(req: Request, res: Response) {
    try {
      console.log("POST /api/secretaria BODY:", req.body);

      // Validar datos que vienen del frontend
      const data: SecretGuardaPacienteInput = SecretGuardaPacientSchema.parse(
        req.body
      );

      // Llamar al servicio que registra usuario + paciente
      const result = await PatientService.register(data);

      return res.status(201).json({
        ok: true,
        message: "Paciente registrado correctament por secretaria",
        usuario: {
          id_usuario: result.usuario.id_usuario,
          nombre: result.usuario.nombre,
          rol: result.usuario.rol,
        },
        paciente: {
          id_paciente: result.paciente.id_paciente,
          nombre: result.paciente.nombre,
          primerapellido: result.paciente.primerapellido,
          correo: result.paciente.correo,
          nacimiento: result.paciente.nacimiento,
          sexo: result.paciente.sexo,
        },
      });
    } catch (err: any) {
      console.error(
        "ERROR en SecretGuardaPacientController.register:",
        err
      );

      // Error de validación Zod
      if (err.name === "ZodError") {
        return res.status(400).json({
          ok: false,
          message: "Datos inválidos",
          errors: err.flatten ? err.flatten() : err,
        });
      }

      // Otros errores (BD, lógica, etc.)
      return res.status(400).json({
        ok: false,
        message: err.message || "Error al registrar paciente",
      });
    }
  }
}
