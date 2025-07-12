import {Request,Response} from "express";
import jwt from "jsonwebtoken"

//Admin login
const adminLogin = async (req:Request,res:Response):Promise<any> => {
    try {
        const {email,password} = req.body

        //check missing reqed filed
        if (!email || !password){
            return res.status(400).json({success:false,message:"Missing Email or Password"})
        }

        //chack email and password correct or not
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET as string)
            return res.status(200).json({success:true,token})
        }else {
            return res.status(400).json({ success: false, message: "Invalid Credentials!" });
        }

    }catch (e:any) {
        console.log(e)
        res.status(500).json({success: false, message: "Something went wrong", error: e.message,});
    }
}

export {adminLogin}