const fs = require("fs");

let file = "./stack.js";

// fs.readFile(file, (error, buffer) => {
//   if (error) {
//     console.error(error.message);
//      return;
//   }

//   console.log(`File Data : ${buffer}`);
// });

let fileName = './test.txt';
let content = "I love node"

fs.writeFile(fileName, content, (error) => {
  
    if(error){
        console.log(error.message);
        return;
    }

    console.log("File Saved at: ", fileName);
})
