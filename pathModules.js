const path = require("path");

console.log(path.sep);

const filePath = path.join("content", "subFolder", "file.txt");

console.log(filePath);

const baseName = path.basename(filePath);

console.log("base name is", baseName);

const absolute = path.resolve(__dirname, "content", "subFolder", "file.txt");

console.log(absolute);
