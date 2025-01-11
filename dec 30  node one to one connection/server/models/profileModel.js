const mongoose= require("mongoose");
const profileSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        unique: true
    }
})
module.exports = mongoose.model("profile", profileSchema);