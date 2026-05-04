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

// catch will handle all the errors of the above promises
```

--------------------------------------------------
--------------------------------------------------
7. **Promise APIs**
- Promise.all()
  - It is used to handle multiple APIs together.
  - We have to pass the iterable i.e. Array of Promises.
  - Result of settled promises is an Array of each promise result.
  - As soon as any of the Promise get rejected, then Promise.all throws an error immediately.

- Promise.allSettled([p1,p2,p3])
  - This reacts differently in case of failure of any promise.
  - Wait for all Promise to Settle.
  - Irrespective of success or failure it will always give an array with respective Failure and success.
  - Result will always be an array.

- Promise.race([p1,p2,p3])
  - As soon as one of the Promise is settled, it will give the value of that Promise.
  - Return the value of first settled Promise.

- Promise.any([p1,p2,p3])
  - It will wait for the first Promise to get Successful/Fulfilled.
  - If all the Promises fails, then it will return an Aggregate Error.
  - AggregateError = [err1, err2, err3].

- Promise.allSettled() is the safest option.
- resolve == success == fulfilled
- reject == failure == rejected

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success", 3000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 Success", 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 Success", 2000));
});

Promise.all([p1, p2, p3])
.then( res => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
  console.error(err);
});

Promise.allSettled([p1, p2, p3])
.then( res => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
  console.error(err);
});

Promise.race([p1, p2, p3])
.then( res => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
  console.error(err);

  // To handle aggregate errors
  console.log(err.errors);
});

Promise.any([p1, p2, p3])
.then( res => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
  // To handle aggregate errors
  console.log(err.errors);
});
```
-----------------------------------------
-----------------------------------------
8. **Async/Await**
1) What is async?
- async function *always return a promise*.
- async is used to prevent the blocking of main thread during long-running tasks.
- If you don't return a promise from it, if you return a value, then this function will automatically wrap the value into the promise.
```javascript
async function getdata() {
  return "hello";
}

const dataPromise = getData(); // Promise
console.log(data);

dataPromise.then(res => console.log(res));
```
2) What is await?
- async and await combo is used to handle promises.
- await is used to pause the execution till the promise get resolved, making asynchronous code read synchronously
- you have to use the word await infront of Promise. And it will resolve the Promise.
- await can only be used inside async function.
```javascript
  const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
  });

  async function handlePromise() {
    const val = await p;
    console.log(val);
  };

  handlePromise();
```
```javascript
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved Value!!");
    },10000)
  });

function getData() {
  // Here JS will not wait for Promise to be resolved
  p.then((res) => console.log(res));
  console.log("Hello Shreyash!");
}

async function handlePromise() {
  const val = await p;
  // JS Engine wait here for Promise to be resolved.
  console.log(val);
  console.log("Hello");
}

async function handlePromise2() {
  const val = await p;
  // JS Engine wait here for Promise to be resolved.
  console.log(val);
  console.log("Hello");

  const val2 = await p;
  console.log(val2);
  // 
}
```
- How the fetch() works?
  - fetch gives us a Promise.
  - On resolved it gives us a response object which is a readable string
  - response.json(). json() is also a promise.

```javascript
  async function handlePromise(){
    const data = await fetch(api);
    const jsonsValue = await data.json();
  }
```
--------------------------------------------------
--------------------------------------------------
9. **What is call, bind and apply in JavaScript?**
- These are the methods that allow you to control the context (this value) in which a function is executed. 
1) *call*: The call() method invokes a function immediately, allowing you to specify the value of this and pass arguments individually (comma-separated).
2) *apply*: The apply() method is similar to call(), but it takes the function arguments as an array (or array-like object) instead of individual arguments.
3) *bind*: The bind() method creates a new function with a specific this value and, optionally, preset initial arguments. Unlike call and apply, bind does not immediately invoke the function; instead, it returns a new function that you can call later.
```javascript
  var employee1 = { firstName: "John", lastName: "Rodson" };
  var employee2 = { firstName: "Jimmy", lastName: "Baily" };

  function invite(greeting1, greeting2) {
    console.log(
      greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
  }

  invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
  invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

  invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
  invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

  var inviteEmployee1 = invite.bind(employee1);
  var inviteEmployee2 = invite.bind(employee2);

  inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
  inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

```

--------------------------------------------------
--------------------------------------------------
10. **Explain the Closures in JavaScript.**
- A Closure is a function that remembers and accesses the variables from its outer function scope from where it is called even after the execution of Outer function is finished. 
- Closures are rely on lexical scoping, which means a function's scope is determined by where it is defined, not where it is executed, allows inner function to access variables from their outer function.
- A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution. 
- Excessive use of closures may retain unnecessary references to variables, causing memory issues.
```javascript
  for (var i = 0; i < 6; i++) {
    setTimeout(() => {
      console.log(i)
    }, 100)
  }

  // output for above code is -> 666666
```
- The reason for the above output is, when JS sees the async code (in this case setTimeout) first, it executes all the synchronous code. And for each iteration, setTimeout is sent to callback queue. 
- When finally all the synchronous code is executed, it's time to execute the functions from callback queue. And that time the value of varialbe i is 6. (this is because var declarations are in global scope)
```javascript
    for (var i = 0; i < 6; i++) {
      var innerFunction = (index) => {
        setTimeout(() => {
          console.log(index)
        }, 100)
      }
      innerFunction(i)
    }

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        console.log(i)
      }, 100)
    }
  // both will give the output -> 0 1 2 3 4 5
```
- We're passing i as parameter to innerFunction(index). Each call creates the new independent varialble
- Same for let declaration it creates new variable.
---------------------------------------------------------------------
---------------------------------------------------------------------
11. **What is strict mode in JavaScript?**
- JavaScript 'use strict' directive is used for strict parsing and error-handling of our code or script. 
- It catches common bugs and errors. 
    ```javascript
      pi = 3.14
      console.log(pi);
      
      // This will work
    ```
    ```javascript
      'use strict'
      pi = 3.14
      console.log(pi);

      // This will throw the error.
    ```
---------------------------------------------------------------------
---------------------------------------------------------------------
# type of Array is also a object in javascript
# typeof null is object.
# typeof undefined is undefined.
---------------------------------------------------------------------
---------------------------------------------------------------------

12. **What is difference between Window and Document?**

    | window                                            | document                                               |
    |---------------------------------------------------|--------------------------------------------------------|
    | It is the root level element in any web page      | It is the direct child of the window object. This is also known as Document Object Model (DOM) |
    | By default window object is available implicitly in the page                  | You can access it via window.document or document.                                             |
    | It has methods like alert(), confirm() and properties like document, location | It provides methods like getElementById, getElementsByTagName, createElement etc               |
