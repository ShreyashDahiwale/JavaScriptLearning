const name = "Shreyash "
const repoCount = 50

console.log(name + repoCount + " Value");  // Try not to use this syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = String("Shreyash-D-RIL") // String is an object
console.log(gameName.length);
console.log(gameName[1]);

console.log(gameName.__proto__); // not need to use proto

console.log(gameName.toUpperCase());

console.log(gameName.includes('yas'));

// const newString = gameName.substring(0,4)
// console.log(newString);
const newString = gameName.slice(-8, 4)
console.log(newString);

const anotherString = "         Shreyash             ";
console.log(anotherString);
console.log(anotherString.trim()); // used for line terminators and white space characters 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('http:'));


console.log(gameName.split('-'));  // convert the parts into Array