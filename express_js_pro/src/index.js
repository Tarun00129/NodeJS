var express = require("express");
const app = express();
var path = require("path");

const staticPath = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"../views/")

// console.log(path.join(__dirname,"../public"));

app.set("views",viewsPath)


app.get("",(req,res)=>{
    res.render("index.hbs")
})

// app.use(express.static(staticPath));



app.get("/",(req,res)=>{
    res.send("hello, I am expressJS ");
})

app.get("/about",(req,res) => {
    res.send("this is About page");
})

app.listen(3000,()=>{   
    console.log("listening at 3000");
})