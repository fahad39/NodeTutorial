const fs = require("fs");

fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error in reading file", err);
    return;
  }

  const first = result;

  fs.readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("error in reading second file", err);
      return;
    }

    const second = result;

    fs.writeFile(
      "./content/resultAsync.txt",
      `here is the result: ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log("There is an error writing while");
        }
        console.log(result);
      }
    );
  });
});
