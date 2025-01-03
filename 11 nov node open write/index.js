// const fs=require("fs");
// fs.open("vsk.txt","w",(err)=>{
//     if(err) throw err;
//     console.log("file succesfuliy create");
// })

// const fs=require("fs");
// fs.writeFile("raj.txt","well come to bhopal",(err)=>{
//     if(err) throw err;
//     console.log("file succesfuliy create");
// })



// const fs=require("fs");
// fs.unlink("vsk.pdf",(err)=>{
//     if(err) throw err;
//     console.log("file succesfuliy delete");
// })

// const fs=require("fs");
// fs.rename("raj.txt","vishal.pdf",(err)=>{
//     if(err) throw err;
//     console.log("file succesfuliy rename");
// })


const http=require("http");
http.createServer((req,res)=>{
    res.write("<h1> We are cybrom student </h1>");
    res.end("<h1>code end here nodemon</h1>");
}).listen(8080);