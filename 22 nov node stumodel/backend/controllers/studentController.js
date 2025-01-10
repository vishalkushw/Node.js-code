const StuModel=require("../models/studentModels");
const dataSave=async(req, res)=>{
const {rollno, name, city, fees}= req.body;
const data=await StuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
})
res.send(data)
}

const dataDisplay=async(req, res)=>{
    const myData= await StuModel.find();
    res.send(myData);
}
const dataSearch=async(req, res)=>{
    const {rollno} = req.body;
    const mydata=await StuModel.find({rollno:rollno})
    res.send(mydata);
}


module.exports={
    dataSave,
    dataDisplay,
    dataSearch
}