const fs = require('fs');

// fs.mkdir("tarun_folder",{recursive:true},(err)=>{
//     if(err) throw err;
// });

// fs.writeFile("tarun_folder/myFile.txt",'this is my File',"utf-8",(err)=>{
//     if (err) throw err;
// })


// fs.appendFile ("tarun_folder/myFile.txt"," Somthing is to be added","utf-8",(err)=>{
//     if (err) throw err;
//     console.log("TASk is Completed");
// })


// fs.readFile("tarun_folder/myFile.txt","utf-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })

// fs.rename('tarun_folder/myFile.txt','tarun_folder/mybio.txt',(err)=>{
//     if(err) throw err;
// })

fs.rm('tarun_folder/mybio.txt',(err)=>{
    if(err) throw err;
    console.log("File deleted");
})