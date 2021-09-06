const EventEmiter = require("events");
var url = "http://mylogger.io/log";

class Logger extends EventEmiter {
  mylog(message) {
    console.log(message);
    this.emit("messageLogged", { id: "1", url: "http:/" });
  }
}

module.exports = Logger;
