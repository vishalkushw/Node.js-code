const express = require("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors= require("cors");
const userRouter= require("./routes/userRoute");
const DBCON=process.env.DBCONNECTION
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect(DBCON).then(()=>{
  console.log("DB connected!!!");
})

app.use("/books", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port! ");
})