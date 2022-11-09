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
        res.end("Response Not Found")
    }
    // console.log("connected");
});

server.listen(3005,'localhost',()=>{
    console.log("Lisening 3005");
})