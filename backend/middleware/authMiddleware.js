import jwt from 'jsonwebtoken';
const clientsecret="Ggggh##$$%%!@#$1234";
function verifyToken(req,res,next){
   const bearer=req.headers['authorization'];
   if(typeof bearer !== 'undefined'){
      const token=bearer.split(' ')[1];
      jwt.verify(token,clientsecret,(err,data)=>{
         if(err){
            res.json({"err":1,"msg":"Token expire"})
         }
         else{
            next();
         }
      })
   }
   else{
      res.json({"err":1,"msg":"Token Not found"})
   }
}
export default verifyToken;