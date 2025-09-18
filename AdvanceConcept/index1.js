// What is a callback function in JavaScript

// this callback function in JS gives asynchronousity to the program
// This callback function is store is different space (logically) and attach a timer to it and till then execute the other lines of code
// web API
setTimeout( () => {
    console.log('This is timer');
},5000);

function x(y){
    console.log('x');
    y();
}

// y() is a callback function
x(function y(){
    console.log('y');
})


// JavaScript is a synchronous and single-threaded language (Main Thread)
// Everything is executed in Call Stack
// If any operation is blocking the call stack then that is blocking main thread


function attachedEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", () => {
        console.log('Yay! You clicked it Correctly!', ++count);
    })
}

// The callback function in click formed a closure with its Parent Function
attachedEventListeners();


// Garbage Collection & removeEventListeners
// Callback functions are heavy
// Smart Garbage collection