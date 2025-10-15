// Client make a request for a service from a server

// All the request coming to the server goes to the Event Queue
// The request from the Event Queue goes to the Event Loop
// Event loop picks up the request from Event Queue and cater the request.

// Request are of two types: 
// 1. Blocking Operation  (Synchronous)
// 2. Non-Blocking Operation  (Asynchronous)

// When event loop picks up the request it checks for the above two types.
// If it is Non-Blocking Operation then it process the request and then send the response to the client
// If it is an Blocking Operations

// To cater the blocking operation, we go to the Thread Pool.
// Thread Pool is the set of multiple threads. Thread is like worker for us.
// A thread has been assign to the request if it is a blocking operation.

// By default we have 4 Threads.



const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);


console.log(1);
// Sync... Blocking
const result = fs.readFileSync("./test.txt","utf-8");
console.log(result);
console.log(2);



console.log(1);
// Async - Non-Blocking (Continue to execute next lines of code and return the result of this later by callback)
fs.readFile("./test.txt","utf-8", (err, result) => {
    console.log(result);
    
});
console.log(2);
console.log(3);
console.log(4);
