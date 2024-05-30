const balance = new Number(100)

console.log(balance);
console.log(typeof balance);

console.log(balance.toString());

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const expo = 1223.893;
console.log(expo.toPrecision(3));


const hundreds = 10000;
console.log(hundreds.toLocaleString('en-IN'));


// *************** Maths *********************** //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.34));   // Round of

console.log(Math.ceil(4.2)); // maximum value
console.log(Math.ceil(4.8));

console.log(Math.floor(4.2)); // lowest value
console.log(Math.floor(4.8));

console.log(Math.min (4, 9, 15, 89));
console.log(Math.max (4, 9, 15, 89));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
