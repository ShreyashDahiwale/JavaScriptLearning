// Date object in JavaScript

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 23);  // Months from 0 to 11
// console.log(myCreatedDate);

let myCreatedDate = new Date(2024, 0, 23, 5 , 3); 
console.log(myCreatedDate);


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  // to compare seconds

// getMonth()
// getDay()

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday: "long",
})