const fs = require("fs")
// fs.writeFile("myFile.txt","hiiiiiiiii we are working in Async FS ",(err)=>{
//     console.log('file is created');
//     console.log(err);
// // })
// fs.appendFile('myFile.txt'," OP",
// (err)=>{
//     console.log("Task Completed")
// })

// fs.readFile('myFile.txt','utf-8',(err,data) =>{
//     console.log(data);
// })

// fs.appendFile('myFile.txt'," OP",
// (err)=>{
//     console.log("Task Completed")
// })
fs.readFile('myFile.txt','utf-8',(err,data)=>{
    console.log(data);
})