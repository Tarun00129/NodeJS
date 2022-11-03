const fs = require("fs")
fs.writeFile("myFile.txt","hiiiiiiiii we are working in Async FS ",(err)=>{
    console.log({err});
})