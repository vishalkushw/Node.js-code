// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("<h1> We are cybrom student</h1>");
//     res.end();
// }).listen(8000);



// const http=require("http");
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'text/html'});
//     res.write("<h1> We are <br> cybrom student</h1>");
//     res.end("this is <br> server ending");
// }).listen(8000);

 
//Node js modules

const http=require("http");
const Myclg=require("./cybrom.js");

http.createServer((req,res)=>{
    res.write("<h1> Wel come</h1>");
    res.write(Myclg.mycollage());
    res.end();
}).listen(8000);