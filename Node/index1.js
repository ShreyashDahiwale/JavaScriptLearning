// to import packages using require you have to specify in package.json file that type would be "commonjs"
// And for require, you have to mention type is "module"

const fs = require('fs');

// Sync... call
fs.writeFileSync("./test.txt","Hey, there!");


// Async
fs.writeFile("./test.txt","Hey, there Asynchronous", (err) => err);


fs.readFile("./test.txt","utf-8", (err, result) => {
    if(err){
        console.log("Error",err);
    } else{
        console.log(result);
    }
});

// const result = fs.readFileSync("./test.txt","utf-8");
// console.log(result);
