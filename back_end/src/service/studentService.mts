import {Request} from "express";
import {DB} from "../config/db.mjs";
import jwt from "jsonwebtoken";

export class StudentService {

    //API - Get Student Profile
    getProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const studentId = parseInt(id);

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Student ID"};
            }

            //find student profile
            const studentProfile = await DB.studentProfile.findUnique({where:{studentId:studentId}})

            if (!studentProfile) {
                return {success: false, status: 404,message: "Student profile not found"};
            }

            return {success: true, status: 200,studentProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Update Student Profile
    updateProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const studentId = parseInt(id);
            const {profilePic,full_name,bio,phone,address} = req.body

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Student ID"};
            }


            // Check if profile exists before updating
            const existingProfile = await DB.studentProfile.findUnique({where: { studentId: studentId }});

            if (!existingProfile) {
                return { success: false, status: 404, message: "Student profile not found" };
            }

            const updateProfile = await DB.studentProfile.update({
                where: { studentId: studentId },
                data:{
                    profilePic,
                    full_name,
                    bio,
                    phone,
                    address
                }
            })

            return {success: true, status: 200,updateProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Update Student Profile
    deleteProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const studentId = parseInt(id);

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Student ID"};
            }

            // Check if profile exists before updating
            const existingProfile = await DB.studentProfile.findUnique({where: { studentId: studentId }});

            if (!existingProfile) {
                return { success: false, status: 404, message: "Student profile not found" };
            }

            // Delete student profile
            await DB.studentProfile.deleteMany({
                where: { studentId: studentId }
            });

            // Delete student
            await DB.student.delete({
                where: { id: studentId }
            });

            return { success: true, status: 200, message: "Student profile deleted successfully" };

        }  catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - All Course's
    allCourses = async ()=> {
        try {
            const courses = await DB.course.findMany()
            return {success:true,status: 200,data:courses}
        }  catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Course Enrollment
    courseEnrollment = async (req:Request)=> {
        try {
            const { studentId, courseId } = req.params

            //check in id enter
            if (!studentId || !courseId) {
                return {success: false, status: 400, message: "studentId and courseId are required"};
            }

            // Check if already enrolled
            let enrollment = await DB.courseEnrollment.findUnique({
                where: {
                    studentId_courseId: {
                        studentId: Number(studentId),
                        courseId: Number(courseId)
                    }
                }
            });

            if (!enrollment) {
                enrollment = await DB.courseEnrollment.create({
                    data: {
                        studentId: Number(studentId),
                        courseId: Number(courseId)
                    }
                });
            }

            // Get student info
            const student = await DB.student.findUnique({where:{id:Number(studentId)}})

            if (!student) {
                return {success: false, status: 404, message: "Student not found"};
            }

            // Generate JWT token for student
            const token = jwt.sign(
                { id: student.id, email: student.email }, process.env.JWT_SECRET as string, { expiresIn: "7d"});

            return {success: true, status: 200, message: "Enrolled and logged in successfully", data: {student, enrollment, token}};

        }  catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - All Enrollment Course's
    allEnrollmentCourses = async (req:Request)=> {
        try {
            const { studentId } = req.params

            //check in id enter
            if (!studentId ) {
                return {success: false, status: 400, message: "studentId is required"};
            }

            // Get student info
            const student = await DB.student.findUnique({where:{id:Number(studentId)}})

            if (!student) {
                return {success: false, status: 404, message: "Student not found"};
            }

            // Get all enrollments for the student, include course info
            const enrollmentCourses = await DB.courseEnrollment.findMany({
                where: { studentId: Number(studentId) },
                include: { course: true },
            });

            if (!enrollmentCourses){
                return {success:true,status: 200,message:"Student not enrollments any course"}
            }

            return {success:true,status: 200,data:enrollmentCourses}
        }  catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }
    
}

export default new StudentService()