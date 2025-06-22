const http=require("http");
const uc=require("uppercase");
http.createServer((req,res)=>{
    res.write("Well Come")
    res.write(uc(" We are cybrom student"));
    res.end();
}).listen(8080);

