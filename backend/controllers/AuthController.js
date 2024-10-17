import userModel from "../models/UserModel.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const clientsecret="Ggggh##$$%%!@#$1234";
const salt = bcrypt.genSaltSync(10);
const signIn=async (req,res)=>{
   try{
        let userData=req.body;
        let user=await userModel.findOne({email:userData.email});
        let dbpass=user.password;
        if(bcrypt.compareSync(userData.password,dbpass))
            {
                const userData={
                    fullName:`${user.firstName} ${user.lastName}`,
                    email:user.email,
                    isAdmin:user.role=="admin"?true:false
                }
                const token=jwt.sign(userData,clientsecret,{expiresIn:"2h"});
                res.json({"err":0,"msg":"Login Success","_token":token});
            }
        else{
            res.json({"err":1,"msg":"Email or Password is not correct"});
        }
   }
   catch(err){
    res.json({"err":1,"msg":"Email or Password is not correct"});
   }
}
const signUp=async (req,res)=>{
    try{
       let userData=req.body;
       userData.password=bcrypt.hashSync(userData.password, salt);
       let newuser=new userModel(userData)
       await newuser.save();
       res.json({"err":0,"msg":"User registered successfully"})
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong or already exists"})
    }
}
export {signIn,signUp};