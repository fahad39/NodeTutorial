const os = require("os");

//info about user
const user = os.userInfo();

console.log(user);

//Print system uptime
console.log(`system up time is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  total: os.totalmem(),
  free: os.freemem(),
};

console.log(currentOS);
