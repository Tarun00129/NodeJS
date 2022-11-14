const path = require('path');
// console.log(path.dirname('/home/tarun/NodeJS_tuto/OsModule/index.js'));
// // console.log(path.basename());
// console.log(path.extname('/home/tarun/NodeJS_tuto/OsModule/index.js'));
// console.log(path.basename('/home/tarun/NodeJS_tuto/OsModule/index.js'));
// console.log(path.parse('/home/tarun/NodeJS_tuto/OsModule/index.js'));


const mypath= path.parse('/home/tarun/NodeJS_tuto/OsModule/index.js');

console.log(mypath.root);
