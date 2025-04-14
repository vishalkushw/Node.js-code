// const http=require("http");
// const fs=require("fs");  //fs is a module

// http.createServer((req,res)=>{
//     fs.readFile("vishal.txt",(err,data)=>{
//     res.write(data);
//     res.end();
//     })
// }).listen(8000);


const fs = require("fs");
fs.appendFile("vsk.pdf","Hellow i Am a Student of cybrom ",(err)=>{

    if(err)throw err;
    console.log("File succesfuly create");
})
