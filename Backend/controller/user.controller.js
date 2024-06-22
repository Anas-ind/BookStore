import User from '../model/user.model.js'
import bcrypt, { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signup = async (req, res)=>{
    try {
       const {fullname , email , password } = req.body;
       const user = await User.findOne({email:email});
       if(user){
        return res.status(404).json({
        success: false,
        message: "User already exists ", 
        })
       }
       const hashpassword = await bcrypt.hash(password , 10)
       const createdUser = new User({
        fullname,
        email,
        password : hashpassword
       })
      await createdUser.save();

       res.status(200).json({message : "User Created successfully" , user:{
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email, 
       }})
    } catch (error) {
       console.log(error)
       return res.status(404).json({
        success: false,
        message: "some error occures ",
       })
    }
}
export const login = async (req, res)=>{
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email:email});
        const isMatch = bcrypt.compareSync(password , user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:'Invalid  username or password'})
        }else{
            res.status(200).json({message: "Login Successfull" , user:{
                _id: user._id,
                fullname : user.fullname,
                email: user.email
            }})
                }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
         success: false,
         message: "some error occures ",
        })
    }
}