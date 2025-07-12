import {Request,Response} from "express";
import {DB} from "../config/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator"
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

//API - User login
interface CustomRequest extends Request{
    body:{
        password:string;
        username:string;
        role: 'student' | 'instructor';
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

// API - User Register
interface RegisterBody {
    password: string;
    username: string;
    name: string;
    email: string;
    profilePic?: string;
    bio?: string;
    expertise?: string;
    role: "student" | "instructor";
}

const register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    try {
        const { password, username, name, email, profilePic, expertise, bio, role } = req.body;

        // Check required fields
        if (!password || !name || !email || !username || !role) {
            return res.status(400).json({ success: false, message: "Missing some required fields" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Enter a valid email!" });
        }

        // Check password length
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Check if user already exists
        const existingUser =
            role === "student"
                ? await prisma.student.findFirst({ where: { OR: [{ email }, { username }] } })
                : await prisma.instructor.findFirst({ where: { OR: [{ email }, { username }] } });

        if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user and generate JWT
        if (role === "student") {
            const newStudent = await prisma.student.create({
                data: {
                    name,
                    email,
                    username,
                    password: hashedPassword,
                    profilePic,
                },
            });
            const token = jwt.sign({ id: newStudent.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
            return res.status(201).json({ success: true, user: newStudent, token });

        } else if (role === "instructor") {
            const newInstructor = await prisma.instructor.create({
                data: {
                    name,
                    email,
                    username,
                    password: hashedPassword,
                    profilePic,
                    expertise,
                    bio,
                },
            });
            const token = jwt.sign({ id: newInstructor.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
            return res.status(201).json({ success: true, user: newInstructor, token });
        } else {
            return res.status(400).json({ success: false, message: "Invalid Role" });
        }
    } catch (e: any) {
        console.log(e);
        res.status(500).json({ success: false, message: "Something went wrong", error: e.message });
    }
}


export {login,register}



