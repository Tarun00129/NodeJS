const EventEmmiter = require("events")
const event = new EventEmmiter();



event.on("wtf2",(sc,msg)=>{
    console.log(`status code is ${sc} amd msg is ${msg} !!!!!`);
})

event.on("tarun",(sc,msg)=>{
    console.log(`The status code is ${sc} and the ${msg} *****`)
})

event.emit("wtf2",200,'ok')

event.emit('tarun',304,'redirecting it self')