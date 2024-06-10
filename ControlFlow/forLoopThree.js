// For in loop takes the key from the object and array

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    c: 'C Language',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    console.log(myObject[key]);
}


const arr = [1,2,3,4,5];

for (const num in arr) {
    console.log(arr[num]);
}