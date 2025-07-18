import {Request,Response} from "express";
import studentService,{StudentService} from "../service/studentService.mjs";

interface StudentProfileUpdateData {
    profilePic?: string;
    full_name?: string;
    bio?: string;
    phone?: string;
    address?: string;
}

class StudentControllers {
    private readonly studentService:StudentService;

    constructor(studentService:StudentService) {
        this.studentService=studentService
    }

    getProfile = async (req: Request, res: Response): Promise<void> =>{
        try {
            const result = await this.studentService.getProfile(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message,
                data:result.studentProfile
            });

        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }

    updateProfile = async (req: Request<{}, {}, StudentProfileUpdateData>, res: Response):Promise<void> =>{
        try {
            const result = await this.studentService.updateProfile(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message,
                data:result.updateProfile
            });
        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }

    deleteProfile = async (req: Request, res: Response): Promise<void> =>{
        try {
            const result = await this.studentService.deleteProfile(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message
            });
        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }

    courseEnrollment = async (req: Request, res: Response): Promise<void> =>{
        try {
            const result = await this.studentService.courseEnrollment(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message,
                data:result.data
            });
        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }
}
export default new StudentControllers(studentService)