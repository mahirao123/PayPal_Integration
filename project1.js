const http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer((req,resp)=>{
    const path=req.url;
    resp.writeHead(200,{"content-type":"txt/html"})

   const fileContent= fs.readFileSync("./view/home.html");
   fs.write(fileContent);
    resp.end();


}).listen(8082);