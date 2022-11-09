const http =require("http")
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == '/'){
    res.end('hello i am server')
    }
    else if(req.url == "/tarun") 
    {
        res.end("Hello I am Tarun")
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1> Page Not Found </h1>")
    }
    // console.log("connected");
});

server.listen(3005,'localhost',()=>{
    console.log("Lisening 3005");
})