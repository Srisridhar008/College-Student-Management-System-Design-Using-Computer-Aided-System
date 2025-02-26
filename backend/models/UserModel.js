
const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    dept:String,
    role:String,
    isVerified:{
        type:Boolean,default:false
    }
},{timestamps:true})
const userModel=new mongoose.model('users',studentSchema)
module.exports=userModel
