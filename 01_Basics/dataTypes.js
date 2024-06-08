// JavaScript evolved everytime througout the period
// The JavaScript commitee don't want that the Old code get disturb
// And they want everyone should get same standard of JavaScript
// So that's why we use "use strict"

"use strict"; // Treat all JS Code as newer version 

/*
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. 
In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

Deleting a variable (or object) is not allowed.
*/

/*
number
bigInt
string
boolean
null => standalone value
undefined
    symbol => unique
*/


// Object

console.log(typeof"Shreyash");
console.log(typeof null);  // Object
console.log(typeof undefined);  // undefined


// ================================================================

// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

// Symbol 
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//  -------------------------------------------------------------------------------

const heros = ["Shaktiman", "Naagraj", "Doga"];

const myObj = {
    firstName: "Shreyash",
    age: 24
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);       // type of Array is also an Object
console.log(typeof myfunction);    // Object Function
console.log(typeof myObj);
myfunction();