const mongoose= require("mongoose");

const taskSchema=new mongoose.Schema({
    tasktitle: {
        type: String,
        require: true
    },
    taskdetail:String,
    userid: {type: mongoose.Types.ObjectId, ref: "user"}
})


module.exports = mongoose.model("task", taskSchema);