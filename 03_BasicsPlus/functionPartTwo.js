function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

function calculateCartAmount(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartAmount(200, 400, 500, 2000));

const user = {
    username: "Shreyash",
    ID: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject?.username} and ID is ${anyobject?.ID}`);
}

handleObject(user)

///////////////// Scopes /////////////////////

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a);
console.log(b);
console.log(c);

// Global Scope work differently for Window console and for Node environment