import {Router} from "express";
import instructorControllers from "../controllers/instructorControllers.mjs";

const instructorRoutes = Router()
instructorRoutes.get("/get-user",instructorControllers.getCourse)

export default instructorRoutes