let myName = "Shreyash    ";

console.log(myName.length);
console.log(myName.truelength);


let myHeros = ["Thor","SpiderMan"];

let heroPower = {
    Thor: "Hammer",
    SpiderMan: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.SpiderMan}`);
    }
}

Object.prototype.shreyash = function(){
    console.log('Shreyash is present in all objects');
}

Array.prototype.heyShreyash = function(){
    console.log('Shreyash says Hello!');
    
}
// myHeros.shreyash();
// heroPower.shreyash();

myHeros.heyShreyash();
// heroPower.heyShreyash();


// inheritance

const User = {
    name: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,

    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport has the access to the property of Teacher


let anotherUsername = "ChaiAurCode      ";
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength();
"Shreyash    ".trueLength();