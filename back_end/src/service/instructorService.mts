import {Request} from "express";
import {DB} from "../config/db.mjs";

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

}

export default new InstructorService()