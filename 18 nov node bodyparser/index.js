const express = require("express");
const app= express();
const mongoose =require ("mongoose");
const bodyparser=require('body-parser');
const stuRoute = require("./routes/stuRoute");
mongoose.connect("mongodb://127.0.0.1:27017/vishaldb")
// body -parse middleware
app.use (bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/students", stuRoute);

app.listen(8080,()=>{
    console.log("server run on 8080");
})