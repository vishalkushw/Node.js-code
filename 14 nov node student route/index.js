const express = require("express");
const app= express();
const stuRoute= require("./routes/studentRoute")
const teachRoute =require ("./routes/teacherRoute")

app.use("/students", stuRoute);
app.use("/teacher",teachRoute);

app.listen(9000,()=>{
    console.log("server run on port 9000");
})
