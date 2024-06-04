function myFunction() {
    console.log(`Hello Shreyash!!!`);
}

myFunction();

function addTwoNumbers(number1, number2) {              // parameters
    if ((typeof number2) === "number" ) {
        console.log(`Addition of two numbers is: ${number1 + number2}`);
        return (number1+number2)
    }
}

const resp = addTwoNumbers(10, 40);  // 10 and 40 are arguments 

console.log(resp);

function loginUserMessage(username = "Samuel"){
    // if(username === undefined)
    if(!username)   {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('Shreyash'));
console.log(loginUserMessage());  // if not passed then undefined
