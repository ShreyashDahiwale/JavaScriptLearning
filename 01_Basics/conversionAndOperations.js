let score = "33ab"
let nullVal = null

console.log(typeof score);
console.log(typeof (score));

// let score1 = 33

// console.log(typeof score1);
// console.log(typeof (score1));

let valueInNumber = Number(score);  // score will be convert into Number  33ab -> NaN ; null -> 0 ; undefined -> NaN ; true -> 1 ; false -> 0
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // "" -> false ; 1 -> true ; 'Hello' -> true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);