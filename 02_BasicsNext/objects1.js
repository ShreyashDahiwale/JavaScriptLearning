// Singleton object (made from constructor)
// Object.creat

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shreyash", // the name is actually a "name" string, but while declaration we don't write in string
    "Full Name": "Shreyash Dahiwale",
    age: 18,
    location: "Navi Mumbai",
    email: "Shreyash.Dahiwale@facebook.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    mySym: "ObjKey1",
    [mySym]: "SymKey1"
}

console.log(JsUser['location']);
console.log(JsUser.location);
console.log(JsUser['Full Name']); // We cannot access this key with dot notation
console.log(JsUser[mySym]);
console.log(JsUser.mySym);

// Object.freeze(JsUser) // this will not allow to change the value of the object
console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Very Good Morning, JSUser`);
}

JsUser.greeting2 = function(){
    console.log(`Very Good Morning, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
console.log(JsUser);