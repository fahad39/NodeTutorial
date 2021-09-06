// const path = require("path");
// const pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require("os");
// const totalMem = os.totalmem();
// const freeMem = os.freemem();

// console.log(`Total Memory : ${totalMem}`);
// console.log(`Free memory : ${freeMem}`);

// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log("files are", files);

// fs.readdir("./", function (err, files) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("files are ", files);
//   }
// });

// const EventEmiter = require("events");
// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", function (args) {
//   console.log("listner called", args);
// });

// logger.mylog("hello logger class");

// const { Socket } = require("dgram");
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello world");
//     res.end();
//   }
//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

const name = require("./names");
const sayHi = require("./utils");
const items = require("./items");
require("./sum");

// console.log(items);
// sayHi("Clark");
// sayHi(name.jhon);
// sayHi(name.peter);
