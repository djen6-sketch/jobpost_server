import express from 'express'
import dbConnect from './config/db.js'
import dotenv from 'dotenv'
import jobsPostRouter from './routes/jobs.routes.js'
import cors from 'cors'
dotenv.config()
/** This imports the dotenv package into your Node/Express application.

Then:

dotenv.config();

tells dotenv to read your .env file and load the variables into:

process.env */



const app = express();
//middlewares
// It helps your app read JSON data sent from the client (like in POST or PUT requests) and makes it available in req.body. Without it, Express cannot understand JSON data in requests.
app.use(express.json());
app.use(cors())

app.use('/api/jobs',jobsPostRouter)


dbConnect()
app.get("/",(req,res)=>{
    res.json({
        message:"server started"
    })})

app.listen(3000,()=>{
    console.log("listening at port 3000")

})