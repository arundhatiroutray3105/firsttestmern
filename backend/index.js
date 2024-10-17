import express from 'express';
import authRoutes from './routes/AuthRoute.js';
import productRoutes from './routes/ProductRoute.js';
import dotenv from 'dotenv';
import db_connection from './db.js';
import cors from 'cors';
//cors=cross origin resource sharing/middeleware usage
dotenv.config();
const PORT=process.env.PORT;
const app=express();
app.use(cors());//allow all cors
db_connection();
app.use(express.json());
app.use("/images",express.static('uploads'));
//define apis 
app.use("/api/auth",authRoutes);//http://localhost:8899/api/auth/signin
app.use("/api/product",productRoutes);//http://localhost:8899/api/product/getproducts
//not found route 
app.use((req,res)=>{
    res.json({"err":1,"msg":"No match route found"});
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server work on port ${PORT}`);
})