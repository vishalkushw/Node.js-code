const express = require("express")
const route = express.Router();


route.get("/",(req, res)=>{
    res.send("This is Home  page")
})

route.get("/stuinfo",(req, res)=>{
    res.send("This is student info page")
})

route.post("/studatasave",(req, res)=>{
    res.send("data save")
})

route.get("/stufees",(req, res)=>{
    res.send("student fees")
})
route.get("/name",(req, res)=>{
    res.send("student name")
})

module.exports=route;