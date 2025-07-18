import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
    id?: string;
}

class Auth{

    //Auth Middleware in Instructor
    authAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
        try {
            const aToken = req.headers.token as string | undefined;

            //if check no token
            if (!aToken) {
                res.status(400).json({ success: false, message: "No token found" });
                return;
            }

            //decode jwt
            const token_decode = jwt.verify(aToken, process.env.JWT_SECRET as string) as {
                id: string;
            };

            req.id = token_decode.id;

            next();
        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: e.message });
        }
    }

    //Auth Middleware in Student
    authStudent = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
        try {
            const sToken = req.headers.token as string | undefined;

            //if check no token
            if (!sToken) {
                res.status(400).json({ success: false, message: "No token found" });
                return;
            }

            //decode jwt
            const token_decode = jwt.verify(sToken, process.env.JWT_SECRET as string) as {
                id: string;
            };

            req.id = token_decode.id;

            next();
        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: e.message });
        }
    }

    //Auth Middleware in Instructor
    authInstructor = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
        try {
            const iToken = req.headers.token as string | undefined;

            //if check no token
            if (!iToken) {
                res.status(400).json({ success: false, message: "No token found" });
                return;
            }

            //decode jwt
            const token_decode = jwt.verify(iToken, process.env.JWT_SECRET as string) as {
                id: string;
            };

            req.id = token_decode.id;

            next();
        } catch (e: any) {
            console.log(e);
            res.status(500).json({ success: false, message: e.message });
        }
    }
}

export default new Auth();
