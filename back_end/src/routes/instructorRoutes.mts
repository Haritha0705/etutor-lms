import {Router} from "express";
import instructorControllers from "../controllers/instructorControllers.mjs";
import Auth from "../middlewares/auth.mjs";

const instructorRoutes = Router()

//Profile Routes
instructorRoutes.get("/get-profile/:id",Auth.authAdmin,instructorControllers.getProfile)
instructorRoutes.patch("/update-profile/:id",Auth.authAdmin,instructorControllers.updateProfile)
instructorRoutes.delete("/delete-profile/:id",Auth.authAdmin,instructorControllers.deleteProfile)

//Course Routes
instructorRoutes.post("/create-course/:id",Auth.authAdmin,instructorControllers.creteCourses)
instructorRoutes.get("/get-course/:id",Auth.authAdmin,instructorControllers.getCourses)
instructorRoutes.patch("/update-course/:id",Auth.authAdmin,instructorControllers.updateCourse)
instructorRoutes.delete("/delete-course/:id",Auth.authAdmin,instructorControllers.deleteCourse)

export default instructorRoutes