const tinderUser = new Object();

tinderUser.id = "124abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Shreyash",
            lastName: "Dahiwale"
        }
    }
}

console.log(regularUser.fullname?.userfullname?.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

const obj33 = {...obj1, ...obj2};
console.log(obj33);


const users = [
    {
        id: 12,
        name: "Shreyash"
    },
    {
        id: 22,
        name: "Shreyash"
    },
    {
        id: 33,
        name: "Shreyash"
    },
    {
        id: 44,
        name: "Shreyash"
    },
]

console.log(Object.keys(tinderUser));  // returns array of keys of an Object
console.log(Object.values(tinderUser));  // returns array of values of an Object
console.log(Object.entries(tinderUser));  // returns array of [key, value] of an Object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));