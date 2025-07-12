import express from "express"
import "dotenv/config"
import {connectDB} from "./config/db.mjs";
import adminRoutes from "./routes/adminRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import instructorRoutes from "./routes/instructorRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))

app.use("/api/v1/admin",adminRoutes)
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/instructor",instructorRoutes)

const startServer = async ()=>{
    try {
        await connectDB()
        app.listen(PORT,()=>{
            console.log(`Server running on http://localhost:${PORT}`);
        })
    }catch (e:any){
        console.error("Failed to start server:", e);
        process.exit(1);
    }
}




startServer()