import {Router} from "express";
import studentControllers from "../controllers/studentControllers.mjs";

const studentRoutes = Router()

studentRoutes.get("/profile/:id",studentControllers.getProfile)

export default studentRoutes