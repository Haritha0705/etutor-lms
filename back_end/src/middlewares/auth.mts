import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
    token?: string;
}

export class Auth {
    authAdmin = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
        try {
            const authHeader = req.headers.authorization;

            // Check if Authorization header exists
            if (!authHeader) {
                res.status(401).json({ success: false, message: "Not authorized. Please log in again." });
                return;
            }

            // Extract token from "Bearer <token>"
            const token = authHeader.split(' ')[1];

            if (!token) {
                res.status(401).json({ success: false, message: "Token not found. Please log in again." });
                return;
            }

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;

            // Check if the user is admin
            if (decoded.email !== process.env.ADMIN_EMAIL) {
                res.status(403).json({ success: false, message: "Forbidden: Not an admin user." });
                return;
            }

            req.token = token;

            next();
        } catch (e: any) {
            console.error("Auth error:", e);
            res.status(500).json({ success: false, message: "Server error", error: e.message });
        }
    }


}

export default new Auth;
