import {Router} from "express";
import studentControllers from "../controllers/studentControllers.mjs";
import Auth from "../middlewares/auth.mjs";

const studentRoutes = Router()

//Student Routes

studentRoutes.get("/get-profile/:id",Auth.authStudent,studentControllers.getProfile)
studentRoutes.patch("/update-profile/:id",Auth.authStudent,studentControllers.updateProfile)
studentRoutes.delete("/delete-profile/:id",Auth.authStudent,studentControllers.deleteProfile)

//Course Routes
studentRoutes.get("/course/:studentId/enrollment/:courseId",Auth.authStudent,studentControllers.courseEnrollment)


export default studentRoutes