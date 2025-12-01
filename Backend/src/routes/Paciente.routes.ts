import { Router } from "express";
import { PatientController } from "../controllers/Paciente.controller";

export const patientRouter = Router();
console.log("Rutas de pacientes cargadas");

//patientRouter.post("/register", (req, res, next) => {
patientRouter.post("/", (req, res, next) => {
  console.log("POST /api/patients fue llamado");
  next();
}, PatientController.register);