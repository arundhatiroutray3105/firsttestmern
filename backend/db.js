import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const Connection_String=process.env.DB_CONNECTION;
async function db_connection(){
    try{
        await mongoose.connect(Connection_String);
        console.log("Database connected")
    }
    catch(err){
        console.log("Database connection error : "+err)
    }
}
export default db_connection;