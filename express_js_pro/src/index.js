var express = require("express");
const app = express();
var path = require("path");

const staticPath = path.join(__dirname,"../public")

console.log(path.join(__dirname,"../public")    );

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("hello, I am expressJS ");
})

app.get("/about",(req,res) => {
    res.send("this is About page");
})

app.listen(3000,()=>{   
    console.log("listening at 3000");
})