import {Pool} from "pg"
import "dotenv/config"

const pool = new Pool({connectionString:process.env.DB_URL})

const connectDB = async () =>{
    try {
        const client = await pool.connect()
        console.log("PostgreSQL connected successfully")
        client.release()
    }catch (err:any) {
        console.error('PostgreSQL connection failed');
        console.log(err)
        process.exit(1);
    }
}

export {pool,connectDB}