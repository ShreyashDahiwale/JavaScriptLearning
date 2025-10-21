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