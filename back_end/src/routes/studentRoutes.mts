import {Router} from "express";
import studentControllers from "../controllers/studentControllers.mjs";
// import {authorizeRole} from "../middlewares/auth.mjs";

const studentRoutes = Router()

studentRoutes.get("/get-profile/:id",studentControllers.getProfile)
studentRoutes.patch("/update-profile/:id",studentControllers.updateProfile)
studentRoutes.delete("/delete-profile/:id",studentControllers.deleteProfile)


export default studentRoutes