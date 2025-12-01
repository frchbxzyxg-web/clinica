import { PagosCita } from "./tablacita";

export const Dataprueba: PagosCita[] =[

    {
    id_cita: 1,
    usuario: "eduardo",
    fecha: new Date("2025-11-18"),
    horainicio: new Date("2025-11-18T09:00:00"),
    horafin: new Date("2025-11-18T09:30:00"),
    estado: true,
    motivo: "Consulta",
    id_doctor: 3,
    id_pasiente: 12,
    hora_llegada: new Date("2025-11-18T08:50:00")
    },
 {
    id_cita: 2,
    fecha: new Date("2025-11-18"),
    usuario: "Daviv",
    horainicio: new Date("2025-11-18T10:00:00"),
    horafin: new Date("2025-11-18T10:30:00"),
    estado: false,
    motivo: "Control",
    id_doctor: 5,
    id_pasiente: 16,
    hora_llegada: new Date("2025-11-18T09:45:00")
  },
{
   id_cita: 3,
    fecha: new Date("2025-11-18"),
    usuario: "hilary",
    horainicio: new Date("2025-11-18T10:00:00"),
    horafin: new Date("2025-11-18T10:30:00"),
    estado: false,
    motivo: "gripe",
    id_doctor: 5,
    id_pasiente: 10,
    hora_llegada: new Date("2025-11-18T09:45:00")
  },

  {
   id_cita: 4,
    fecha: new Date("2025-11-18"),
    usuario: "pedro",
    horainicio: new Date("2025-11-18T10:00:00"),
    horafin: new Date("2025-11-18T10:30:00"),
    estado: false,
    motivo: "tos",
    id_doctor: 5,
    id_pasiente: 15,
    hora_llegada: new Date("2025-11-18T09:45:00")
  }

  
]