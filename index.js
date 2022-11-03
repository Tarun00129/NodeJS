const { constants } = require('buffer');
const fs = require('fs');
// fs.writeFileSync("read.txt","I'm Tarun's file");

// // fs.appendFileSync("read.txt"," hiiii file is appended");

// fs.readFileSync("read.txt");

// const buff = fs.readFileSync("read.txt");
// console.log(buff);
// data = buff.toString();

// console.log(data);

// fs.renameSync("read.txt","myFile.txt")

// fs.mkdirSync("tarun");
// fs.writeFileSync('tarun/bio.txt',"hiii i a bio file");

// fs.appendFileSync('tarun/bio.txt'," this line is appanded brother look hear :) ")

// fs.renameSync("tarun/bio.txt","tarun/new.txt");

const data = fs.readFileSync("tarun/new.txt","utf-8");
console.log(data);