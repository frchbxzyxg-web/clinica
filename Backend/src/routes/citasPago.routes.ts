import { Router } from 'express';
import { prisma } from '../services/prisma';  
const router = Router();
router.get('/', async (req, res) => {
  try {
    const citas = await prisma.cita.findMany({
      include: {
        doctor: {
          include: {
            usuario: true, // ← de aquí sale el nombre
          },
        },
        paciente: true,
      },
    });

    const data = citas.map((cita) => ({
      id_cita: cita.id_cita,
      fecha: cita.fecha,
      usuario: cita.doctor?.usuario?.nombre ?? "Sin usuario",
      horainicio: cita.horainicio,
      horafin: cita.horafin,
      estado: cita.estado,
      motivo: cita.motivo,
      id_doctor: cita.id_doctor,
      id_pasiente: cita.id_paciente,
    }));

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener citas' });
  }
});
export default router;