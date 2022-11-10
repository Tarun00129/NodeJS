const fs = require("fs")

const myData={
    name:"TARUN SAINI",
    age: 22,
    sub : "Engeenering"
}

/*
// console.log(myData.name,
    // myData.age,myData.sub);
    const jsonData = JSON.stringify(myData)
    console.log(jsonData);
    console.log(jsonData.name); // false Operation
    
    const objData = JSON.parse(jsonData)
    console.log(objData);
*/

const jsonData = JSON.stringify(myData)

fs.writeFile("json1.json",jsonData,(err)=>{
console.log("Work Done");
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgData = JSON.parse(data)
    console.log(orgData);
})