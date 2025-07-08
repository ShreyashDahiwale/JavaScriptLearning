console.log(b);  // undefined
console.log(a);  // throws an error Cannot access 'a' before initialization
// Here, "a" was hoisted but memory is allocated in different space 
// and it is not initailized. This is called Temporal Dead Zone
// Temporal Dead Zone ends when the value is assigned to variable "a" by thecode
// And whenever we access the that variable in the Temporal Dead Zone then we get Reference Error

console.log(x); // It gives x is not defined

let a = 10;     // this is in separate memory space
var b =100;     // this variable is attached to the global execution context


// console.log(window.b);


// Syntax Error
// Reference Error
// Type Error