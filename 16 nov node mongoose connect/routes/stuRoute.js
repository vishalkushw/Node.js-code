const express=require("express");
const route=express.Router();

route.get("/stuinfo",(res,req)=>{

    res.send("This is student info page");
})

route.post("/stusave",(res,req)=>{

    res.send("This is student save page");
})

route.get("/sturesult",(res,req)=>{

    res.send("This is student result page");
})

route.get("/stufees",(res,req)=>{

    res.send("This is student fees page");
})

module.exports=route;