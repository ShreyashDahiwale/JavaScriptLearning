// Array is a collection of multiple items
// JavaScript arrays are resizeable

const myArr = [0, 1, 2, 3, 4, 5];

console.log(myArr);

// Shallow Copy 
/* A shallow copy is an object who shares the same reference of that object */

const myHeros = ["Shaktiman", "Naagraj"]
const myArr2 = new Array(1, 2,3 , 4);

// Array Methods
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);


myArr.unshift(9); // add the element at the start
myArr.shift(); // remove the element at the start
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));  // If elent not found then return -1


const newArr = myArr.join();  // this converts the array into string
console.log(myArr);
console.log(newArr);


// Slice & Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3);  // this manipulates the original array
console.log(myn1);
console.log("C ", myArr);