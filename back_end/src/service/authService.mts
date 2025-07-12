import { Request } from "express";
import { DB } from "../config/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../generated/prisma";
import validator from "validator";

const prisma = new PrismaClient();

export class AuthService {

    //API - User login
    login = async (req: Request) => {
        try {
            const { password, username, role } = req.body;

            if (!username || !password || !role) {
                return { success: false, status: 400, message: "Missing required fields" };
            }

            if (role === "student") {
                const student = await DB.student.findUnique({ where: { username } });

                if (!student) {
                    return { success: false, status: 404, message: "Student not found" };
                }

                const isMatch = await bcrypt.compare(password, student.password);
                if (!isMatch) {
                    return { success: false, status: 401, message: "Invalid password" };
                }

                const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

                return {success: true, message: "Student login successful", data: { id: student.id, username: student.username }, token};

            } else if (role === "instructor") {
                const instructor = await DB.instructor.findUnique({ where: { username } });

                if (!instructor) {
                    return { success: false, status: 404, message: "Instructor not found" };
                }

                const isMatch = await bcrypt.compare(password, instructor.password);
                if (!isMatch) {
                    return { success: false, status: 401, message: "Invalid password" };
                }

                const token = jwt.sign({ id: instructor.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

                return {success: true, message: "Instructor login successful", data: { id: instructor.id, username: instructor.username }, token};

            } else {
                return { success: false, status: 400, message: "Invalid role" };
            }

        } catch (e: any) {
            console.log(e);
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    };

    //API - User Register
    register = async (req: Request) => {
        try {
            const { password, username, name, email, profilePic, expertise, bio, role } = req.body;

            // Check required fields
            if (!password || !name || !email || !username || !role) {
                return  { success: false,status:400, message: "Missing some required fields" }
            }

            // Validate email
            if (!validator.isEmail(email)) {
                return { success: false,status:400, message: "Enter a valid email!" }
            }

            // Check password length
            if (password.length < 8) {
                return { success: false,status:400, message: "Password must be at least 8 characters long" }
            }

            // Check if user already exists
            const existingUser =
                role === "student"
                    ? await prisma.student.findFirst({ where: { OR: [{ email }, { username }] } })
                    : await prisma.instructor.findFirst({ where: { OR: [{ email }, { username }] } });

            if (existingUser) {
                return { success: false,status:409, message: "User already exists" }
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
                return { success: true,status:201, user: newStudent, token }

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
                return { success: true,status:201, user: newInstructor, token }
            } else {
                return { success: false,status:400, message: "Invalid Role" }
            }

        } catch (e: any) {
            console.log(e);
            return  { success: false,status:500, message: "Something went wrong", error: e.message }
        }
    }
}

export default new AuthService();
