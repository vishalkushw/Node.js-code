
const express= require("express");
const route = express.Router();
const adminController= require("../controllers/adminController");

route.post("/adminlogin", adminController.adminLogin);
route.post("/createuser", adminController.createUser);
route.get("/userdatashow", adminController.userDataShow);
route.post("/assigntask", adminController.assignTask);
route.get("/displayusertask", adminController.displayUserTask);
route.get("/deletusertask", adminController.deletUserTask);

module.exports=route;
