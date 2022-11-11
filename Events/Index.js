const EventEmmiter = require("events")
const event = new EventEmmiter();

event.on("wtf1",()=>{
    console.log("what is your name ");
})
event.on("wtf2",()=>{
    console.log("My name is Tarun");
})
event.on("wtf2",()=>{
    console.log("what is your age");
})
event.on("wtf4",()=>{
    console.log("I am 22 year old");
})
console.log("*************************************************************************");
event.emit("wtf1")
event.emit("wtf2")
event.emit("wtf3")
event.emit("wtf4")
console.log("*************************************************************************");
event.emit("wtf1")
event.emit("wtf2")
event.emit("wtf1")
event.emit("wtf2")
console.log("*************************************************************************");
event.emit("wtf1")
event.emit("wtf3")
event.emit("wtf4")
event.emit("wtf2")
console.log("*************************************************************************");
event.emit("wtf4")
event.emit("wtf3")
event.emit("wtf2")
event.emit("wtf1")
console.log("*************************************************************************");
