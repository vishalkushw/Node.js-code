const userModel= require("../models/userModel");
const profileModel= require("../models/profileModel");

const dataSave=async(req, res)=>{
const {username, email, firstname, lastname}= req.body;
   const UserData= await userModel.create({
    username:username,
    email:email
   })
   const ProfileData= await profileModel.create({
    firstname:firstname,
    lastname:lastname,
    userid:UserData._id
   })


    res.send("Hello")
}


const dataDisplay=async(req, res)=>{

    const MyData= await profileModel.find().populate("userid");
    res.send(MyData);
}

module.exports={
    dataSave,
    dataDisplay
}