import {Request,Response} from "express";
import adminService,{AdminService} from "../service/adminService.mjs";

interface CustomRequest extends Request{
    body:{
        password:string;
        username:string;
    }
}

class AuthControllers {

    private readonly adminService:AdminService

    constructor(adminService:AdminService) {
        this.adminService=adminService
    }

    login = async (req: CustomRequest, res: Response): Promise<void> => {
        try {
            const result = await this.adminService.login(req);

            if (!result.success) {
                res.status(result.status ?? 500).json({ success: false, message: result.message });
                return;
            }

            res.status(200).json({
                success: true,
                message: result.message,
                token: result.token,
            });

        }catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }
}

export default new AuthControllers(adminService)