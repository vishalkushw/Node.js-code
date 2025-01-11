const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const UserRoute= require("./routes/userRoute");

mongoose.connect("mongodb://127.0.0.1:27017/vishaldb").then(()=>{
    console.log("DB connected!!!")
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

app.use("/users", UserRoute);


app.listen(8000, ()=>{ 
     console.log(`Server run on 8000 `)
})