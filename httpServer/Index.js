const fs = require("fs")
const http =require("http")

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == '/'){
    res.end('hello i am server')
    }
    else if(req.url == "/tarun") 
    {
        res.end("Hello I am Tarun")
    }
    else if(req.url == "/api")
    {
        fs.readFile(`/home/tarun/NodeJS_tuto/UserApi/userApi.json`,"utf-8",(err,data)=>{
            // console.log(data);  
            res.end(data);  
        })
    }
    else if(req.url == "/api2")
    {
        let obj;
        fs.readFile("/home/tarun/NodeJS_tuto/UserApi/userApi.json","utf-8",(err,data)=>{
        obj = JSON.stringify(data)
        console.log(obj);
        res.end(obj);
        });
        
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1> Page Not Found </h1>")
    }
    // console.log("connected");
});

server.listen(3003,'localhost',()=>{
    console.log("Lisening 3002");
})