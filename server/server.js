import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js"
import cors from "cors";


const app=express()
dotenv.config()
const port = process.env.PORT;
const url = process.env.URL;


mongoose.connect(url)
.then(console.log("DataBase connection successfully.."))
.catch((err) => console.log(err));


// middleware
app.use(cors())
app.use(express.json());


// all routes in here 

app.use("/api/v1/auth",auth)



app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})