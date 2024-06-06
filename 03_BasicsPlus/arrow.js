const user = {
    username : "Samuel",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`Hey, ${this.username}! Welcome to website`);
        console.log(this);
    },
}
// If you want to use current context then you can use 'this'

user.welcomeMessage();
user.username = "Sam"
user.welcomeMessage();

console.log(this);

// Browser has Global object which is Windows object


// function chai(){
//     console.log(this);
// }

// chai();
// ------------------------------------------

// function chai(){
//     let username = "Shreyash"
//     console.log(this);
// }

// chai();


const chai = () => {
    let username = "Shreyash";
    console.log(this.username);
}


// -------------------------------------- ARROW Function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(10,30));



// const addTwo = (num1, num2) => num1 + num2;   // implicit return

const addTwo = (num1, num2) => (num1 + num2);   

const obj = (num1, num2) => ({Sum_of_Two_Numbers: num1+ num2});   

console.log(addTwo(10,30));
console.log(obj(10,30));

