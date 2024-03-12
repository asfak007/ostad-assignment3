const TodoListModel = require('../model/TodoListModel');
const jwt = require('jsonwebtoken');

exports.create=async (req,res)=>{
    try{
        let email = req.headers['email'];
        // console.log(req.headers['email'])
        let reqBody = req.body;
        reqBody.email = email;
        // console.log(reqBody);
        await  TodoListModel.create(reqBody);
        res.json({status:"success",message:"todo added successfully"})
    }catch (err){
        res.json({status:"fail",message:err});
    }
}
exports.read=async (req,res)=>{
    try{
        let email = req.headers['email'];
       let  result = await TodoListModel.find({email:email})
        res.json({status:'success',data:result})

    }catch (err){
        res.json({status:"fail",message:err});
    }
}
exports.update=async (req,res)=>{
    try{
        let email = req.headers['email'];
        let reqBody = req.body;
        let {id} = req.params;

        await TodoListModel.updateOne({_id:id,email:email},reqBody)
        res.json({status:'success',message:"Update Complete"})
    }catch (err){
        res.json({status:"fail",message:err});
    }
}
exports.delete=async (req,res)=>{
    try{
        let email = req.headers['email']
        let {id} = req.params;
        await TodoListModel.deleteOne({_id:id,email:email});
        res.json({status:"success",message:"todo List delete successfully"})

    }catch (err){
        res.json({status:"fail",message:err});
    }
}
exports.chaneStatus=async (req,res)=>{
    try{
        let email = req.headers['email'];
        let reqBody = req.body;
        let {id} = req.params;

        await TodoListModel.updateOne({_id:id,email:email},reqBody)
        res.json({status:"success",message:"Todo List status change successfully"})
    }catch (err){
        res.json({status:"fail",message:err});
    }
}