export interface PagosCita {
  id_cita: number;
  usuario: string;
  fecha: string;               // <- antes Date
  horainicio: string | null;   // <- antes Date
  horafin: string | null;      // <- antes Date
  estado: string | null;       // <- antes boolean
  motivo: string | null;
  id_doctor: number | null;
  id_pasiente: number | null;
  hora_llegada: string | null; // <- antes Date
}