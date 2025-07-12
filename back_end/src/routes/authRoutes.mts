import {Router} from "express";
import authControllers from "../controllers/authControllers.mjs";

const authRoutes = Router();

authRoutes.post("/login",authControllers.loginUser)
authRoutes.post("/register",authControllers.registerUser)

export default authRoutes;