// const user = new Object();

const user = {
    username: "Shreyash",
    loginCount: 3,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`);
        // console.log("Got user details from database.");
        console.log(this);
        // this is the current context
    }
}

// in global context of node environment 'this' is blank
console.log(this);


// console.log(user.signedIn);
// user.getUserDetails();


// const promiseOne = new Promise()
// const date = new Date()
// new is a constructor function


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => {
        console.log(`Welcom ${this.username}`);
    }

    // return this;
    // Implicitly return is defined, you don't have to write this
}


const userOne = new User("Shreyash", 4, true);
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);


// Read about method instanceof