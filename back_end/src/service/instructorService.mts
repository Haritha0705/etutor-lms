import {Request} from "express";
import {DB} from "../config/db.mjs";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


export class InstructorService {

    //API - Get Instructor Profile
    getProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const instructorId = parseInt(id);

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Instructor ID"};
            }

            //find instructor profile
            const instructorProfile = await DB.instructorProfile.findUnique({where:{instructorId:instructorId}})

            if (!instructorProfile) {
                return {success: false, status: 404,message: "Instructor profile not found"};
            }

            return {success: true, status: 200,instructorProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Update Instructor Profile
    updateProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const instructorId = parseInt(id);
            const {profilePic,full_name,bio,expertise} = req.body

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Student ID"};
            }

            // Check if profile exists before updating
            const existingProfile = await DB.instructorProfile.findUnique({where: { instructorId: instructorId }});

            if (!existingProfile) {
                return { success: false, status: 404, message: "Instructor profile not found" };
            }

            const updateProfile = await DB.instructorProfile.update({
                where: { instructorId: instructorId },
                data:{
                    profilePic,
                    full_name,
                    bio,
                    expertise,
                }
            })

            return {success: true, status: 200,updateProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Update Instructor Profile
    deleteProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const instructorId = parseInt(id);

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Instructor ID"};
            }

            // Check if profile exists before updating
            const existingProfile = await DB.instructorProfile.findUnique({where: { instructorId: instructorId }});

            if (!existingProfile) {
                return { success: false, status: 404, message: "Instructor profile not found" };
            }

            // Delete Instructor profile
            await DB.instructorProfile.deleteMany({
                where: { instructorId: instructorId }
            });

            // Delete Instructor
            await DB.instructor.delete({
                where: { id: instructorId }
            });

            return { success: true, status: 200, message: "Instructor profile deleted successfully" };

        }  catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Crete Courses
    createCourses = async (req:Request)=> {
        try {
            const { id } = req.params;
            const { title, description } = req.body;

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Instructor ID"};
            }

            //check in title and description
            if (!title || !description){
                return {success: false, status: 400, message: "Missing filed"};
            }

            const instructorId = parseInt(id);
            if (isNaN(instructorId)) {
                return { success: false, status: 400, message: "Instructor ID must be a valid number" };
            }

            const newCourse = await prisma.course.create({
                data: {
                    title,
                    description,
                    instructorId
                }
            });

            return {success: true, status: 201, message: "New course created successfully", data: newCourse};

        }  catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Get Courses
    getCourses = async (req:Request)=> {
        try {
            const {id} =req.params;
            const CoursesId = parseInt(id);

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Instructor ID"};
            }

            //find instructor profile
            const coursesProfile = await DB.course.findUnique({where:{id:CoursesId}})

            if (!coursesProfile) {
                return {success: false, status: 404,message: "Instructor profile not found"};
            }

            return {success: true, status: 200,coursesProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }

    //API - Update Courses
    updateCourses = async (req:Request)=> {
        try {
            const {id} =req.params;
            const CoursesId = parseInt(id);
            const {title,description} = req.body

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Course ID"};
            }

            // Check if profile exists before updating
            const existingProfile = await DB.course.findUnique({where: { id: CoursesId }});

            if (!existingProfile) {
                return { success: false, status: 404, message: "Instructor profile not found" };
            }

            const updateProfile = await DB.course.update({
                where: { id: CoursesId },
                data:{
                    title,
                    description
                }
            })

            return {success: true, status: 200,updateProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }
}

export default new InstructorService()