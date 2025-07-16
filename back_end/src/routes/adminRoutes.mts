import {Router} from "express";
import adminControllers from "../controllers/adminControllers.mjs";

const adminRoutes = Router();

adminRoutes.post("/login",adminControllers.login)

export default adminRoutes;