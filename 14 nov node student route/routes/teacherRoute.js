const express = require("express")
const route = express.Router();

route.get("/",(req, res)=>{
    res.send("This is teacher home page")
})
route.get("/teacherinfo",(req, res)=>{
    res.send("This is teacher info page")
})

route.post("/teachersubject",(req, res)=>{
    res.send("Teacher subject page")
})

route.get("/teachersal",(req, res)=>{
    res.send("Teacher  salary page")
})



module.exports=route;