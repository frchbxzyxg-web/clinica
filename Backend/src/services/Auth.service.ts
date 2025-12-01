import { prisma } from "../services/prisma";
import { feistelEncrypt } from "../utils/feistel";
import { caesarEncrypt } from "../utils/caesar";
import { LoginInput } from "../schemas/Auth.schema";

export class AuthService {
  static async login(data: LoginInput) {
    const { username, password } = data;

    // Buscar usuario
    const user = await prisma.usuario.findFirst({
      where: {
        nombre: username,  
      },
      include: {
        paciente: true, 
      },
    });

    if (!user) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    // Verificar contraseña
    const key = process.env.FEISTEL_KEY || "dev_key";
    const encryptedInput = feistelEncrypt(password, key);

    const caesarShift = Number(process.env.CAESAR_SHIFT ?? "3");
    const finalInput = caesarEncrypt(encryptedInput, caesarShift);

    if (finalInput !== user.contrasena) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    return {
      id_usuario: user.id_usuario,
      nombre_usuario: user.nombre,
      rol: user.rol,
      paciente: user.paciente,
    };
  }
}
