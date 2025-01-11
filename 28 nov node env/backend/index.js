const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const stuRoute= require("./routes/studentRoute");
    require("dotenv").config();
    const Port = process.env.PORT || 8080

mongoose.connect(process.env.DBCONTION).then(()=>{
    console.log("DB connected!!!")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


app.use((req,res ,next)=>{
    console.log("First middleware");
    next();
})

app.get("/",(req,res,next)=>{
    console.log("middle fun");
    res.send("Home page data");
    next();
} )

app.use((req,res ,next)=>{
    console.log("end middleware");
    next();
})


app.use("/students", stuRoute);

app.listen(Port, ()=>{
    console.log(`server run on ${Port} `)
})

// (Backend)
//npm i nodemon
// npm i express
//npm i mongoose
//npm i body-parser
//npm i cors
//npm i dotev

//(Frontend)
//npm create vite@latest
//npm i react-router-dom
//npm i axios
//npm i react-bootstrap bootstrap
