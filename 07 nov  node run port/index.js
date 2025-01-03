// const express= require("express");
// const app=express();
// const Port=9000;
// app.get("/",(req,res)=>{
//     res.send("<h1> My First page  </h1>");
// })

// app.get("/home",(req,res)=>{
//     res.send("My Home page this is first page");
// })

// app.get("/about",(req,res)=>{
//     res.send("My About page");
// })

// app.listen(Port,()=>{
//     console.log(`Server run on ${Port}`);
// })


const express=require("express");
const app=express();

app.get("/",(req ,res)=>{
    res.send("home page");
})
app.get("/home",(req ,res)=>{
    res.send("home page data");
})

app.listen(8000,()=>{
console.log("server run on port 8000");
})