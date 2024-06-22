import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname : {
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true
    },
    password:{
        type:String,
        trim: true,
        required:true,
    },
    isVerified:{
        type:Boolean,
        default:false
    }
    

},{
    timestamps: true
})
const User = mongoose.model('User' , userSchema);
export default User;
 
