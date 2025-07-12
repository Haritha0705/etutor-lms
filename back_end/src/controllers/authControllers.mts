import {Request,Response} from "express";
import {DB} from "../config/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//API - User login
interface CustomRequest extends Request{
    body:{
        password:string;
        username:string;
        role:string;
    }
}

const login = async (req:CustomRequest,res:Response)=>{
    try {
        const {password,username,role} = req.body;

        //check missing reqed filed
        if ( !password || !username || !role){
            return res.status(400).json({success:false,message:"Missing Email or Password"})
        }

        //check role is student
        if (role === 'student'){
            const student = await DB.student.findUnique({where:{username}});

            if (!student){
                return res.status(404).json({success: false, message: "Student not found",});
            }

            //password decrypt
            const isMatch = await bcrypt.compare(password,student.password)
            if (isMatch){
                // If passwords match, generate a JWT token for the student
                const token = jwt.sign({id:student.id},process.env.JWT_SECRET as string,{ expiresIn: "1d"})
                res.status(200).json({success:true,message: "login Student login successful",data: {id: student.id, username: student.username},token})
            }else {
                return res.status(401).json({success: false, message: "Invalid password"});
            }

        //check role is student
        }else if (role === 'instructor'){
            const instructor = await DB.instructor.findUnique({where:{username}});

            if (!instructor){
                return res.status(404).json({success: false, message: "Instructor not found",});
            }

            //password decrypt
            const isMatch = await bcrypt.compare(password,instructor.password)
            if (isMatch){
                // If passwords match, generate a JWT token for the student
                const token = jwt.sign({id:instructor.id},process.env.JWT_SECRET as string,{ expiresIn: "1d"})
                res.status(200).json({success:true,message: "login Instructor login successful",data: {id: instructor.id, username: instructor.username},token})
            }else {
                return res.status(401).json({success: false, message: "Invalid password"});
            }

        //check role is other one
        }else {
            return res.status(400).json({success:false,message:"Invalid Role"})
        }

    }catch (e:any) {
        console.log(e)
        res.status(500).json({success: false, message: "Something went wrong", error: e.message,});
    }
}

export {login}



