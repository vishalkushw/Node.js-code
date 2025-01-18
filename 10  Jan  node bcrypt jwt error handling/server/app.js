// const express = require("express");
// const app=express();
// const dotenv=require('dotenv');
// dotenv.config();
// const mongoose= require("mongoose");
// const bodyparser = require('body-parser')

// const cors= require("cors");
// const userRouter= require("./routes/userRoute");


// const DBCON = process.env.DBCONNECTION

// app.use(cors());

// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
// mongoose.connect(DBCON).then(()=>{
//   console.log("DB connected!!!");
// })

// // app.get("/",(req,res,next)=>{
// //   console.error(err.stack);
// //   throw new Error("Something went wrong")
// //   next();
// // })

// app.get('/',async(req,res,next)=>{
//   try{
//     throw new Error('something ent wrong');
//   }catch (err){
//      next(err);
//   }
   
// })

// app.use((err,req,res,next)=>{
//   res.status(500).json({error:err.message})
// })

// // app.use((err,req,res,next)=>{
// //   res.status(500).send({error:err.message})
// // })


// // app.use("/user", userRouter);

// app.listen(8000, ()=>{
//     console.log("server run on 8000 Port!");
// })


const express = require("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser = require('body-parser')
const cors= require("cors");
const userRouter= require("./routes/userRoute");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/jwtvishal").then(()=>{
  console.log("DB connected!!!");
})

app.use("/",(req,res,next)=>{
    throw new Error ("Something went wrong");
    next();
})

app.use((err,req,res,next)=>{
  res.status(500).json({error: err.message})
})


app.use("/user", userRouter);

app.listen(8000, ()=>{
    console.log("server run on 8000 Port!");
})