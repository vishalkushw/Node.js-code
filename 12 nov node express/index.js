// const express=require("express")
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("program of express framework")
// })
// app.listen(8000,()=>{
//     console.log("server run");
// });




// const express = require("express");
// const app=express();
// app.get("/",(req,res)=>{
//   res.send("vishal kushwah");
// })
// app.listen(9000, ()=>{
//     console.log("server run");
// })


// const express=require("express");
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("well come Vishal ");
// })
// app.listen(8080,()=>{
//     console.log("run server");
// })


// const express=require("express");
// const app=express();
// app.get("/",(req,res)=>{
//     res.send("you can do this vishal kushwah");
// })
// app.listen(5000,()=>{
//     console.log("wel come to bhopal ");
// })




const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.get("/save",(req,res)=>{
    res.send("get request by user send by server");
})

app.post("/about",(req,res)=>{
    res.send("This is post request send by user");
})
app.get("/servicePage",(req,res)=>{
    res.send("This is service page by user");
})

app.get("/data",(req,res)=>{
    res.send("This is service page by user");
})

app.listen(8000,()=>{
    console.log("server run on 8000 ");
})
