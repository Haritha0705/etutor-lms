import {Router} from "express";
import adminControllers from "../controllers/adminControllers.mjs";
import Auth from "../middlewares/auth.mjs";

const adminRoutes = Router();

adminRoutes.post("/login",adminControllers.login)

export default adminRoutes;