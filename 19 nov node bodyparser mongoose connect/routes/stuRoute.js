const express=require("express");
const route=express.Router();
const stuController=require("../controllers/studentController");

route.post("/datasave",stuController.datasave);
module.exports=route;