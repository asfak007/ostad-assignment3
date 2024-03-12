const UserModel = require("../model/UserModel")
const jwt = require('jsonwebtoken')

exports.registration=async (req,res)=>{
    try{
        let reqBody = req.body;
        await UserModel.create(reqBody);
        res.json({status:"success",message:"Registration Completed"})

    }catch (err){
        res.json({status:"fail",message:err})
    }
}

exports.login= async (req,res)=>{
    try{
        let reqBody = req.body;
        let user= await UserModel.find(reqBody);
        if(user.length>0){
            let Payload = {exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody['email']}
            let token = jwt.sign(Payload,'123-xyz');
            res.json({status:"success",message:"User Found",token:token})
        }else {
            res.json({status:"fail",message:"No User Found"})
        }
    }catch (err){
        res.json({status:"fail",message:err})
    }
}

exports.profileUpdate=async (req,res)=>{
    try{
        let email = req.headers['email'];
        let reqBody = req.body;
        await UserModel.updateOne({email:email},reqBody)
        res.json({status:'success',message:"Update Complete"})
    }catch (err){
        res.json({status:"fail",message:err})
    }
}

exports.profileDetails=async (req,res)=>{
    try{
        let email=req.headers['email']
    console.log(email);
        let result = await  UserModel.find({email:email})
        res.json({status:'Success',data:result})
    }catch (err){
        res.json({status:"fail",message:err})
    }
}
exports.logOut=(req,res)=>{
    try{

    }catch (err){
        res.json({status:"fail",message:err})
    }
}