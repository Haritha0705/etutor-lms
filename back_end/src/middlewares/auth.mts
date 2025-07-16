// import { Request, Response, NextFunction } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
//
// interface DecodedUser extends JwtPayload {
//     id: string;
//     role: string;
//     email?: string;
// }
//
// interface CustomRequest extends Request {
//     user?: { id: string; role: string };
// }

// export const authorizeRole = (roles: string[]) => {
//     return (req: Request, res: Response, next: NextFunction): void => {
//         try {
//
//
//         } catch (e: any) {
//             console.error("Authorization error:", e);
//             res.status(401).json({
//                 success: false,
//                 message: "Authorization failed",
//                 error: e.message,
//             });
//         }
//     };
// };
//
// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
//
// // Define a custom request interface with a user property
// interface CustomRequest extends Request {
//     user?: {
//         id: string;
//     };
// }
//
// // Define the token payload structure
// interface DecodedToken {
//     id: string;
//     // You can add email, role, etc., if needed
// }
//
// export const authorizeRole = async (
//     req: CustomRequest,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         const authHeader = req.headers.authorization;
//
//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//             return res
//                 .status(401)
//                 .json({ success: false, message: "No token provided" });
//         }
//
//         const token = authHeader.split(" ")[1];
//
//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET as string
//         ) as DecodedToken;
//
//         // Attach decoded user ID to request
//         req.user = { id: decoded.id };
//
//         next();
//     } catch (e: any) {
//         console.error("JWT Error:", e);
//         return res
//             .status(401)
//             .json({ success: false, message: "Invalid or expired token" });
//     }
// };
