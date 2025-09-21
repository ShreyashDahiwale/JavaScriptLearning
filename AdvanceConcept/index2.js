// JS is a synchronous single threaded language
// It has only one call stack and all the things executed there
// Whenever a JS code is run the Global Execution Context is created and that is pushed in Call Stack

// To access all the functionality of Browser through Web APIs
/*
--- Web APIs---
setTimeOut()
DOM APIs
fetch()
localStorage
console
location
*/

// Global Object is window


// Callback Queue
// Event Loop -> The Job of this Event Loop is to check the Callback Queue and put this function into the Call Stack (Act as a gatekeeper)

// Micro Task Queue (with Higher Priority then Callback Queue)
// All the network calls are register here (all the callback function which comes from promises)
// Promises
// Mutation Observer ->  The MutationObserver interface provides the ability to watch for changes being made to the DOM tree


console.log('Start');

setTimeout(() => {
    console.log('cbT');
},5000);

fetch('https://api.netflix.com')
.then(function cbF(){
    console.log('cbF Netflix');
    
});

console.log('End');
