var express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello, I am expressJS ");
})

app.get("/about",(req,res) => {
    res.send("this is About page");
})

app.listen(3000,()=>{
    console.log("listening at 3000");
})