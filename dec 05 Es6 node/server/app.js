import express from "express";

const app=express();

import StuRoute from "./routes/studentRoute.js";

app.use("/student",StuRoute);

app.get("/",(req,res)=>{
    res.send("wel come to Bhopal");
})

app.listen(8000,()=>{
    console.log("server run on 8000 Port");
})


