import { Router } from "express";
import { AuthController } from "../controllers/Auth.controller";

export const authRouter = Router();

authRouter.post("/login", AuthController.login);
// POST http://localhost:4000/api/auth/login
