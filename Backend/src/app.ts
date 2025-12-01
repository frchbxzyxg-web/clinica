import express from "express";
import cors from "cors";
import { patientRouter } from "./routes/Paciente.routes";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // front
  })
);

app.use(express.json());
app.get("/api/patients", (_, res) => {
  res.json({ status: "ok" });
});
app.use("/api/patients", patientRouter);
console.log("rutas registradas");

import { authRouter } from "./routes/Auth.routes";
app.use("/api/auth", authRouter);
app.get("/api/auth", (_, res) => {
  res.json({ status: "Funcionando..." });
});

