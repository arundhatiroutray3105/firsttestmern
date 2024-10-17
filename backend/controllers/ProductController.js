import prodModel from "../models/ProductModel.js";
const getAllProducts=async (req,res)=>{
    try{
        let products=await prodModel.find();
        res.json({"err":0,"prodata":products})
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong"})
    }
}
const getProductById=async (req,res)=>{
    try{
      let id=req.params.id;
      let product=await prodModel.findById(id);
      res.json({"err":0,"prodata":product})
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong"})
    }
}
const addProduct=async (req,res)=>{
    try{
       let prodData=req.body;
       let newproduct= new prodModel(prodData);
        await newproduct.save();
        res.json({"err":0,"msg":"Product Added Successfully"});
    }
    catch(err){
        res.json({"err":1,"msg":"Something went wrong or already exists"})
    }
}
const deleteProduct=async (req,res)=>{
    try{
        let id=req.params.id;
         const product=await prodModel.findByIdAndDelete(id);
         if(!product){
            res.json({"err":1,"msg":"Product with id not found"})
         }
        res.json({"err":0,"msg":"product deleted"})
      }
      catch(err){
          res.json({"err":1,"msg":"Something went wrong"})
      }
}
const updateProduct=(req,res)=>{
    res.json({"err":0,"msg":"Product Updated"})
}
export {getAllProducts,getProductById,addProduct,deleteProduct,updateProduct};