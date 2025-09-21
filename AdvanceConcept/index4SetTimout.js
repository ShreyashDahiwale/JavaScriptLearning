console.log('Start');

setTimeout(() => {
    console.log('Callback');
}, 5000);

console.log('End');

let startDate = new Date().getTime;
let endDate = startDate;

while (endDate < startDate + 100000) {
    endDate = new Date().getTime();
}
console.log('This is while');

// --------------------------------------------------------

console.log('Start');

setTimeout(() => {
    console.log('Callback');
}, 0);

console.log('End');