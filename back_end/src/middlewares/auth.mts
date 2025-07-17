// import { Request, Response, NextFunction } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
//
// // Define a custom request interface with a userId property
// interface CustomRequest extends Request {
//     userId?: string;
// }
//
// // Define the token payload structure
// interface decoded extends JwtPayload {
//     id: string;
//
// }
//
// export const authorizeRole = async (
//     req: CustomRequest,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         const token = req.headers;
//         console.log("Received Token:", token);
//         console.log("JWT_SECRET:", process.env.JWT_SECRET);
//
//         if (!token) {
//             return res.status(401).json({ success: false, message: "No token provided" });
//         }
//
//         const secret = process.env.JWT_SECRET as string;
//         if (!secret) {
//             throw new Error("JWT_SECRET not defined in environment");
//         }
//
//         const decoded = jwt.verify(token, secret) ;
//
//         req.userId = decoded.id;
//         next();
//     } catch (e: any) {
//         console.error("JWT Error:", e.message);
//         return res
//             .status(401)
//             .json({ success: false, message: "Invalid or expired token" });
//     }
// };
