import "dotenv/config"
import { PrismaClient } from "../generated/prisma";


const DB = new PrismaClient()

const connectDB = async () =>{
    try {
        await DB.$connect()
        console.log("PostgreSQL connected successfully with Prisma");
    }catch (err:any) {
        console.error("PostgreSQL connection failed:");
        console.error(err);
        process.exit(1);
    }
}

export {DB,connectDB}