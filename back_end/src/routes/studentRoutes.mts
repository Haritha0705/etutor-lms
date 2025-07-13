import {Router} from "express";
import studentControllers from "../controllers/studentControllers.mjs";

const studentRoutes = Router()

studentRoutes.get("/get-profile/:id",studentControllers.getProfile)
studentRoutes.patch("/update-profile/:id",studentControllers.updateProfile)


export default studentRoutes