# JavaScript 


1. **Is JavaScript a pass-by-reference or pass-by-value language?**
- JavaScript is pass-by-value always.
- But when you pass an object or array, the value being passed is actually a reference to the object, not the object itself.
- If you change something inside the object, the change shows up outside.
- But if you replace the object completely, the outside variable doesn’t change — because you only had a copy of the reference.

```JavaScript
function modify(obj) {
  // Modify the contents
  obj.name = "John";  
  console.log("Inside function (after modifying property):", obj);

  // Reassign the reference
  obj = { name: "Doe" };  
  console.log("Inside function (after reassigning obj):", obj);
}

let person = { name: "Alice" };
console.log("Before function call:", person);

modify(person);

console.log("After function call:", person);


// OUTPUT
Before function call: { name: "Alice" }
Inside function (after modifying property): { name: "John" }
Inside function (after reassigning obj): { name: "Doe" }
After function call: { name: "John" }

```

-------------------------------------------------------------------
-------------------------------------------------------------------

2. **In JavaScript, how do you turn an Object into an Array []?**
```JavaScript
let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]
```

---------------------------------------------------------------
---------------------------------------------------------------

3. **What is Hoisting in JavaScript?**
- Hoisting in JavaScript is the mechanism where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code executed.
- Declarations are hoisted, not the initializations.
- To avoid hoisting, we can run JavaScript in strict mode.
```JavaScript
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 
```
---------------------------------------------------
---------------------------------------------------
4. **Callback Hell**
```javascript
const cart = ["shoes", "pants","kurta"];

api.createOrder();

api.proceedToPayment();

api.showOrderSummary();

api.updateWallet();

api.createOrder(cart, function () {

  api.proceedToPayment(function() {
    
    api.showOrderSummary(function() {

      api.updateWallet();
    });
  });
});

```
- *Inversion of Control*: We pass the control of our code to some other code.
- Issues with Callbacks
  - Callback Hell
  - Inversion of Control

------------------------------------------------
------------------------------------------------
5. **Promises**
```javascript
const cart = ["shoes","pants","kurtas"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo){
    showOrderSummary(paymentInfo, function(){
      updateWalletBalance();
    })
  });
}); //orderId

proceedToPayment(orderId); 
// These two are asynchronous and dependent on each other

const promise = createOrder(cart);
// This will return us a Promise and Promise is nothing but an Empty Object
// The program will go on executing
// after the Promse resolve the empty object got filled automatically

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

// Pending , Fullfill , Rejected
// promise gives us the gurantee that it will call the callback function
// PromiseState
// PromiseResult
promise.then(function (orderId) {
  return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo) {
  return updateWalletBalance(paymentInfo);
})

// We always have to return the promise when we are chaining it.
```
- Promises are immutable and resolved just once.
- A container for a future value. OR
- A Promise is an object representing the eventual completion or failure of an asynchronous operation.

--------------------------------------------------
----------------------------------------------
6. **Promise Deep Dive**
```javascript
const cart = ["shoes","pants","kurtas"];

const promise = createOrder(cart);

promise.then(function(orderId){
  console.log(orderId);
  return orderId;
})
.then(function(){
  return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  console.log(paymentInfo)
})
.catch((err)=> {
  console.log(err.message);
});

// resolve and reject are the functions given by JavaScript 
// Producer
function createOrder(cart) {
  const pr = new Promise(function(resolve, reject){
    // createOrder
    // validateCart
    // orderId
    if(!validateCart(cart)){
      const err = new Error("Cart is Not Valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12323";
    if(orderId){
      setTimeOut(function(){
        resolve(orderId);
      },5000)
    }

  });

  return pr;
}
function validateCart(cart){
  return true;
}

promise.then(function(orderId){
  console.log(orderId);
  return orderId;
})
.then(function(){
  return proceedToPayment(orderId);
})
.catch((err)=> {
  console.log(err.message);
})
.then(function(paymentInfo){
  console.log(paymentInfo)
})
.then(function() {
  console.log(`No matter what happens, I will definietely be called.`)
})

```