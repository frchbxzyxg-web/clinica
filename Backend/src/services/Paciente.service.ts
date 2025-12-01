import { prisma } from "./prisma";
import { feistelEncrypt } from "../utils/feistel";
import { caesarEncrypt } from "../utils/caesar";
import { PacienteRegisterInput  } from "../schemas/Paciente.schema";

export class PatientService {
  static async register(data: PacienteRegisterInput) {
    const exists = await prisma.paciente.findFirst({
      where: {
        correo: data.email,
      },
    });
    if (exists) {
      throw new Error("El correo ya está registrado para otro paciente");
    }

    const userExists = await prisma.usuario.findFirst({
      where: { nombre: `${data.name} ${data.lastname}` }
    });
    if (userExists) {
      throw new Error("El nombre de usuario ya existe, elige otro");
    }

    // Cifrado Feistel
    const key = process.env.FEISTEL_KEY || "dev_key";
    const encryptedPassword = feistelEncrypt(data.password, key);

    // Cifrado Cesar
    const caesarShift = Number(process.env.CAESAR_SHIFT ?? "3");
    const finalCipher = caesarEncrypt(encryptedPassword, caesarShift);


    let sexoDb: string | null = null;
    if (data.sex === "hombre") sexoDb = "H";
    else if (data.sex === "mujer") sexoDb = "M";

    const result = await prisma.$transaction(async (tx) => {
      const nuevoUsuario = await tx.usuario.create({
        data: {
          nombre: `${data.name} ${data.lastname}`,
          contrasena: finalCipher,
          rol: "Paciente",
        },
      });

      const nuevoPaciente = await tx.paciente.create({
        data: {
          nombre: data.name,
          segundonombre: null,
          primerapellido: data.lastname,
          segundoapellido: null,
          nacimiento: data.fechaNacimiento,     
          altura: null,
          peso: null,
          sexo: sexoDb,                       
          tiposangre: null,
          telefono: null,
          correo: data.email,
          id_usuario: nuevoUsuario.id_usuario,
        },
      });

      return {
        usuario: nuevoUsuario,
        paciente: nuevoPaciente,
      };
    });

    return result;
  }
}
