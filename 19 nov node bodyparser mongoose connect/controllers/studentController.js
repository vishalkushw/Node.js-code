const stuModel=require("../models/studentModels");
const datasave =async(req,res)=>{
    const {rollno ,name,city,fees}=req.body;
    const Data=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("Data save in db ");
}

module.exports={ 
    datasave
}
