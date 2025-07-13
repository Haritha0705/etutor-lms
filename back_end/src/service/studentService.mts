import {Request} from "express";
import {DB} from "../config/db.mjs";
import jwt from "jsonwebtoken";

export class StudentService {

    //API - User Profile
    getProfile = async (req:Request)=> {
        try {
            const {id} =req.params;
            const profileId = parseInt(id);

            //check in id enter
            if (!id){
                return {success: false, status: 400, message: "Missing Student ID"};
            }

            //find student profile
            const studentProfile = await DB.studentProfile.findUnique({where:{id:profileId}})

            if (!studentProfile) {
                return {success: true, status: 200,message: "User not found"};
            }

            return {success: true, status: 200,studentProfile};

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }
}

export default new StudentService()