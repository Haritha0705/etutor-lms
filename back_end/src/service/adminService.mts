import { Request } from "express";
import jwt from "jsonwebtoken"

export class AdminService {

    //Admin login
    login= async (req: Request) => {
        try {
            const {email,password} = req.body

            //check missing reqed filed
            if (!email || !password){
                return { success: false, status: 400, message: "Missing required fields" };
            }

            //chack email and password correct or not
            if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
                const token = jwt.sign(email+password,process.env.JWT_SECRET as string)
                return { success: true, status: 200,token};
            }else {
                return { success: false, status: 401, message: "Invalid Credentials" };
            }

        }catch (e:any) {
            console.log(e)
            return {success: false, status: 500, message: "Internal server error", error: e.message};
        }
    }
}

export default new AdminService()

