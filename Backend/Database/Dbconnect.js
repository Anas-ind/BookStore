import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

function dbconnect(){
    try {
        mongoose.connect(process.env.MONGO_URL , {
        })
        console.log("DB is Connected Successfully...")  
        
    } catch (error) {
        console.log(error)   
    }
}

export default dbconnect;
