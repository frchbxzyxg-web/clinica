import { Router, Request, Response } from "express";

const router = Router();

// Ejemplo: endpoint de pacientes (de prueba)
router.get("/pacientes", (_req: Request, res: Response) => {
  res.json([
    { id: 1, nombre: "Paciente demo 1" },
    { id: 2, nombre: "Paciente demo 2" }
  ]);
});

export default router;
