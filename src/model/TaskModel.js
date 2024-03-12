const mongoose = require('mongoose')

const DatabaseSchema= mongoose.Schema({
    email:{type:String,require:true},
    title:{type:String,unique:true,require:true},
    description:{type:String,require:true},
    status:{type:String,require:true},

},{versionKey:false})

const TaskModel = mongoose.model('tasks',DatabaseSchema)

module.exports=TaskModel;