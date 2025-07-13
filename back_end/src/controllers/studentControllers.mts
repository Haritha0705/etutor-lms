import {Request,Response} from "express";
import studentService,{StudentService} from "../service/studentService.mjs";

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

        }catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }
}
export default new StudentControllers(studentService)