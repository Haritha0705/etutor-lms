import {Request} from "express";
import {DB} from "../config/db.mjs";
// import { PrismaClient } from '@prisma/client'
//
//
// const prisma = new PrismaClient()

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

    //API - Course Enrollment
    // courseEnrollment = async (req:Request)=> {
    //     try {
    //         const { studentId, courseId } = req.params
    //
    //
    //         //check in id enter
    //         if (!studentId || !courseId) {
    //             return {success: false, status: 400, message: "studentId and courseId are required"};
    //         }
    //
    //         await DB.courseEnrollment.findUnique({
    //             where: {
    //                 studentId_courseId: {
    //                     studentId,
    //                     courseId,
    //                 },
    //             },
    //         })
    //     }  catch (e: any) {
    //         console.log(e);
    //         return {success: false, status: 500, message: "Internal server error", error: e.message};
    //     }
    // }
    
}

export default new StudentService()