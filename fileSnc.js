const fs = require("fs");

const firstFile = fs.readFileSync("./content/first.txt", "utf-8");
const secondFile = fs.readFileSync("./content/second.txt", "utf-8");

fs.writeFileSync(
  "./content/resultSync.txt",
  `Hello this is result : ${firstFile} , ${secondFile}`
);
