import {Router} from "express";
import {login, register} from "../controllers/authControllers.mjs";

const authRoutes = Router();

authRoutes.post("/login",login)
authRoutes.post("/register",register)

export default authRoutes;