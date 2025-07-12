import {Request,Response} from "express";
import instructorService, {InstructorService} from "../service/instructorService.mjs";

class InstructorControllers {
    private readonly instructorService:InstructorService
    constructor(instructorService:InstructorService ) {
        this.instructorService=instructorService
    }
    getCourse = (req:Request,res:Response):void =>{
        const users:string | null =this.instructorService.getUser()
        if (users === null){
            res.status(404).json({message:"No user Found !"})
            return
        }
        res.status(200).json({message:"Get user",data:users})
        return;
    }
    
}


export default new InstructorControllers(instructorService)