import {Router} from "express";
import {adminLogin} from "../controllers/adminControllers.mjs";

const adminRoutes = Router();

adminRoutes.post("/login",adminLogin)

export default adminRoutes;