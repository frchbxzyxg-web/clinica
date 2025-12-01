import { Request, Response } from "express";
import { loginSchema } from "../schemas/Auth.schema";
import { AuthService } from "../services/Auth.service";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const data = loginSchema.parse(req.body);

      const userData = await AuthService.login(data);

      return res.status(200).json({
        ok: true,
        message: "Login exitoso",
        user: userData,
      });
    } catch (err: any) {
      console.error("ERROR en AuthController.login:", err);

      if (err.name === "ZodError") {
        return res.status(400).json({
          ok: false,
          message: "Datos inválidos",
          errors: err.flatten(),
        });
      }

      return res.status(400).json({
        ok: false,
        message: err.message || "Error al iniciar sesión",
      });
    }
  }
}
