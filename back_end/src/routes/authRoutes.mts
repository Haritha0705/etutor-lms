import {Router} from "express";
import {login} from "../controllers/authControllers.mjs";

const authRoutes = Router();

authRoutes.post("/login",login)

export default authRoutes;