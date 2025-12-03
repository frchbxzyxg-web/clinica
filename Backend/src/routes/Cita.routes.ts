import { Router } from "express";
import { CitaController } from "../controllers/Cita.controller";

export const citaRouter = Router();

citaRouter.post("/", CitaController.create); // POST /api/citas
