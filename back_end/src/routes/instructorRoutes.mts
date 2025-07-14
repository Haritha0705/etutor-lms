import {Router} from "express";
import instructorControllers from "../controllers/instructorControllers.mjs";

const instructorRoutes = Router()
instructorRoutes.get("/get-profile/:id",instructorControllers.getProfile)

export default instructorRoutes