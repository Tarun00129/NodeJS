const fs = require('fs');
fs.writeFileSync("read.txt","I'm Tarun's file");

// fs.appendFileSync("read.txt"," hiiii file is appended");

fs.readFileSync("read.txt");

const buff = fs.readFileSync("read.txt");
console.log(buff);
data = buff.toString();

console.log(data);