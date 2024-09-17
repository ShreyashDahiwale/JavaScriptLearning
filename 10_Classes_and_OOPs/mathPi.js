const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
// enumerable is for iterations 



// console.log(Object.getOwnPropertyDescriptors(chai));

// const myNewObject = Object.create(null)