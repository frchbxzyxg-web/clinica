import { Router } from "express";
import { SecretGuardaPacientController } from "../controllers/SecretGuardaPacient.controller";

export const SecretGuardaPacientRouter = Router();
console.log("Rutas de pacientes cargadas");

//patientRouter.post("/register", (req, res, next) => {
SecretGuardaPacientRouter.post("/", (req, res, next) => {
  console.log("POST /api/patients fue llamado");
  next();
}, SecretGuardaPacientController.register);