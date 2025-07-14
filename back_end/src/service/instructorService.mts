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

}

export default new InstructorService()