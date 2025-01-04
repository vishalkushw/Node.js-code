const http=require("http");
const uc=require("uppercase");
http.createServer((req,res)=>{
    res.write("well come")
    res.write(uc(" We are cybrom student"));
    res.end();
}).listen(8080);

