// Set
console.log(' ----------------------------- Set -----------------------------');
let myValuesArray = [1, 2, 3, 4, 5, 5, 5, 2, 2, 1, 6];
let myValuesString = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// let myUniqueValuesArray = new Set(myValuesArray);
let myUniqueValuesArray = new Set(myValuesArray);
console.log(myUniqueValuesArray.has(10));
// myUniqueValuesArray.add(10);
myUniqueValuesArray = Array.from(myUniqueValuesArray);
console.log(myUniqueValuesArray);



let myUniqueValuesString = new Set(myValuesString);
console.log(myUniqueValuesString);

// Efficently look up if a value exists in an array

// Array.includes() method has O(n) time complexity, which means it will check each element in the array until it finds a match or reaches the end of the array. In contrast, a Set has O(1) time complexity for lookups, which means it can check if a value exists in constant time regardless of the size of the Set. Therefore, using a Set for lookups is more efficient than using an array with includes() when you have a large number of values to check.
// Another interesting point is that Set is not able to be converted to JSON. The JSON.Stringify function just returns [].


// Map
console.log(' ----------------------------- Map -----------------------------');
const userMap = new Map();
userMap.set('John', { age: 25, location: 'New York' });
userMap.set('Jane', { age: 30, location: 'Los Angeles' });
console.log(userMap.get('John')); // { age: 25, location: 'New York' }
console.log(userMap.get('Jane')); // { age: 30, location: 'Los Angeles' }

// If you want to count the occurrences of each word in a string, you can use a Map to store the counts:
const fruitArray = ['apple', 'banana', 'orange', 'apple', 'orange', 'orange'];
const fruitCount = new Map();

fruitArray.forEach((fruit) => {
    if(fruitCount.has(fruit)) {
        fruitCount.set(fruit, fruitCount.get(fruit) + 1);
    } else {
        fruitCount.set(fruit, 1);
    }
});
console.log(fruitCount); // Map(3) { 'apple' => 2, 'banana' => 1, 'orange' => 3 }