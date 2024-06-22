import express from 'express'
import dbconnect from './Database/Dbconnect.js'
import cors from 'cors'
import bookroute from './route/book.route.js'
const app = express();
import userRoute from './route/user.route.js'
app.use(cors());
app.use(express.json()
)

import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 3005;

// connect to mongodb
dbconnect();
//Defining routes 
app.use('/book' , bookroute);
app.use('/user', userRoute)


app.listen( PORT , ()=>{
    console.log('The app is running at PORT ' ,PORT)
})


 