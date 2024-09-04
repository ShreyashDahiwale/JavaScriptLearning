function multiplyByFive(num) {
    return num * 5;
}

multiplyByFive.power = 2;
// multiplyByFive(6);

console.log(multiplyByFive(6));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);


// This is the current context

function createUser(username, score) {
    this.username = username;
    this.score = score;
    // console.log(this);
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}

// const chai = createUser("Chai", 25); // This will give an error that printMe is not defined
const chai = new createUser("Chai", 25); // This will give an error that printMe is not defined
const tea = createUser("Tea", 250);

chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/