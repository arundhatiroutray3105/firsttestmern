import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true, 
    },
    firstName:{
        type:String,
        required:true, 
    },
    lastName:{
        type:String,
        required:true, 
    },
    age:{
        type:Number,
        required:true, 
    },
    role:{
        type:String,
        required:true, 
        //default:"user"
    }
},{timestamps:true})
const userModel=mongoose.model("user",userSchema);
export default userModel;