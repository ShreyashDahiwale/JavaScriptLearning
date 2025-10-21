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


