// Higher Order Function
// A function which takes a function as a argument or return a function from it is Higher Order Funtion

function x() {
    console.log("Namaste");
} // callback function

function y(x) {
    x();
} // higher order function


const radius = [1,3,8,9];

function area(radius) {
    return Math.PI * radius * radius;
}

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));
