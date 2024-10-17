import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true, 
    },
    price:{
        type:Number,
        required:true, 
    },
    description:{
        type:String,
        required:true, 
    },
    availableItem:{
        type:Number,
        required:true, 
    },
    imagePath:{
        type:String,
        required:true, 
    }
},{timestamps:true})
const prodModel=mongoose.model("product",productSchema);
export default prodModel;