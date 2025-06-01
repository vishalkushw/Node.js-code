// const http=require("http");
// const uc=require("uppercase");
// http.createServer((req,res)=>{
//     res.write("well come")
//     res.write(uc(" We are cybrom student and i am from wardha mp "));
//     res.end();
// }).listen(8080);

const http=require("http");
const uc=require("uppercase");
http.createServer((req,res)=>{
    res.write("well come to bhopal")
    res.write(uc(" We are cybrom student"));
    res.end();
}).listen(8080);

