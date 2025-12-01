import { Request, Response } from "express";
import { pacienteRegisterSchema } from "../schemas/Paciente.schema";
import { PatientService } from "../services/Paciente.service";

export class PatientController {
  static async register(req: Request, res: Response) {
    try {
      const data = pacienteRegisterSchema.parse(req.body);

      const result = await PatientService.register(data);

      return res.status(201).json({
        ok: true,
        message: "Paciente registrado correctamente",
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
      console.error("ERROR en PacienteController.register:", err);

      if (err.name === "ZodError") {
        return res.status(400).json({
          ok: false,
          message: "Datos inválidos",
          errors: err.flatten(),
        });
      }

      return res.status(400).json({
        ok: false,
        message: err.message || "Error al registrar paciente",
      });
    }
  }
}
