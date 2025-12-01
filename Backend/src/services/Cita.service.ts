import { prisma } from "../services/prisma";
import { CitaCreateInput } from "../schemas/Cita.schema";

export class CitaService {
  static async create(data: CitaCreateInput, idUsuario: number) {
    // Buscar el doctor (solo hay uno)
    const doctor = await prisma.doctor.findFirst();
    if (!doctor) {
      throw new Error("No hay doctor registrado en el sistema");
    }

    // Buscar paciente asociado al usuario logeado
    const paciente = await prisma.paciente.findFirst({
      where: { id_usuario: idUsuario },
    });

    if (!paciente) {
      throw new Error("No se encontró el paciente asociado al usuario");
    }

    // Construir horainicio y horafin a partir de fecha (Date) + horacita (string "HH:mm")

    // data.fecha ya es Date (solo parte de fecha)
    const fecha = data.fecha;

    // horacita: "HH:mm"
    const [hhStr, mmStr] = data.horacita.split(":");
    const hh = parseInt(hhStr, 10);
    const mm = parseInt(mmStr, 10);

    // horainicio: mismo día que 'fecha', hora = horacita
    const horainicio = new Date(fecha);
    horainicio.setHours(hh, mm, 0, 0);

    // horafin = horainicio + 35 minutos
    const horafin = new Date(horainicio.getTime() + 35 * 60 * 1000);

    // 4. Crear cita
    const cita = await prisma.cita.create({
      data: {
        fecha,                         
        horainicio,                    
        horafin,                       
        estado: "pendiente",
        motivo: data.motivo,
        id_doctor: doctor.id_doctor,
        id_paciente: paciente.id_paciente,
      },
    });

    return cita;
  }
}
