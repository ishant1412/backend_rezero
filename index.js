import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.get('/',(req,res)=>{
    res.send("kuch bhi data ")
})
app.listen(process.env.PORT ,()=>{
    console.log('app runnning on port :',process.env.PORT)
})
