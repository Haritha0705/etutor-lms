import {Request,Response} from "express";
import authService, {AuthService} from "../service/authService.mjs";

interface CustomRequest extends Request{
    body:{
        password:string;
        username:string;
        role: 'student' | 'instructor';
    }
}

interface RegisterBody {
    password: string;
    username: string;
    email: string;
    role: "student" | "instructor";
}

class AuthControllers {

    private readonly authService:AuthService

    constructor(authService:AuthService) {
        this.authService=authService
    }

    loginUser = async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const result = await this.authService.login(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message,
                data: result.data,
                token: result.token,
            });
        }catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }

    registerUser = async (req: Request<{}, {}, RegisterBody>, res: Response):Promise<void> =>{
        try {
            const result = await this.authService.register(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({success: true, message: result.message, data: result.user, token: result.token});

        }catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }

}

export default new AuthControllers(authService)