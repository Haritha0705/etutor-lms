import {Router} from "express";
import instructorControllers from "../controllers/instructorControllers.mjs";

const instructorRoutes = Router()

//Profile Routes
instructorRoutes.get("/get-profile/:id",instructorControllers.getProfile)
instructorRoutes.patch("/update-profile/:id",instructorControllers.updateProfile)
instructorRoutes.delete("/delete-profile/:id",instructorControllers.deleteProfile)

//Create Course
instructorRoutes.post("/create-course/:id",instructorControllers.creteCourses)
instructorRoutes.get("/get-course/:id",instructorControllers.getCourses)
instructorRoutes.patch("/update-course/:id",instructorControllers.updateCourse)
instructorRoutes.delete("/delete-course/:id",instructorControllers.deleteCourse)

export default instructorRoutes