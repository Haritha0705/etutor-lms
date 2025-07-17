import {Request,Response} from "express";
import instructorService, {InstructorService} from "../service/instructorService.mjs";

interface InstructorProfileUpdateData {
    profilePic?: string;
    full_name?: string;
    bio?: string;
    expertise?: string;
}

interface CreteCourses {
    title: string;
    description: string;
}

class InstructorControllers {
    private readonly instructorService:InstructorService
    constructor(instructorService:InstructorService ) {
        this.instructorService=instructorService
    }

    getProfile = async (req: Request, res: Response): Promise<void> =>{
        try {
            const result = await this.instructorService.getProfile(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message,
                data:result.instructorProfile
            });

        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }

    updateProfile = async (req: Request<{}, {}, InstructorProfileUpdateData>, res: Response):Promise<void> =>{
        try {
            const result = await this.instructorService.updateProfile(req);

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
            const result = await this.instructorService.deleteProfile(req);

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

    creteCourses = async (req: Request<{}, {}, CreteCourses>, res: Response): Promise<void> =>{
        try {
            const result = await this.instructorService.createCourses(req);

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

    getCourses = async (req: Request, res: Response): Promise<void> =>{
        try {
            const result = await this.instructorService.getCourses(req);

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

    updateCourse = async (req: Request<{}, {}, CreteCourses>, res: Response):Promise<void> =>{
        try {
            const result = await this.instructorService.updateCourses(req);

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

    deleteCourse = async (req: Request, res: Response): Promise<void> =>{
        try {
            const result = await this.instructorService.deleteCourse(req);

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

}

export default new InstructorControllers(instructorService)