import {Router} from "express";
import instructorControllers from "../controllers/instructorControllers.mjs";

const instructorRoutes = Router()
instructorRoutes.get("/get-profile/:id",instructorControllers.getProfile)
instructorRoutes.patch("/update-profile/:id",instructorControllers.updateProfile)
instructorRoutes.delete("/delete-profile/:id",instructorControllers.deleteProfile)

export default instructorRoutes