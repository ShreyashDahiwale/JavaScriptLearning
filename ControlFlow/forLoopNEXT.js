// for of 

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}

// Maps
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('FR', "FRANCE")
map.set('EU', "EUROPE")
// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
    }
    
    
const myObject = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

// This throws an error that myObject is not iterable
for (const [key, value] of myObject) {
    console.log(`${key} : ${value}`);
            
}