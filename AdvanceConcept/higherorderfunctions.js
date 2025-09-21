// Map() Filter() Reduce() are Higher Order Function


function binary(x){
    return x.toString(2)
}

// map() is used to Transform the Array
const arrmap = [5, 1, 3 ,8 ,9]
// double = [10, 2, 6, 16, 18]
const double = arrmap.map(x => x*2);

console.log(double);

// ------------------------------------------------
// filter() is used to filter the values
console.log(arrmap.filter(x => x%3===0));

// ---------------------------------------------------------------------
// reduce()
const output = arrmap.reduce(function(acc, curr){
    // curr --> current value
    // acc --> accumulate the result 
    acc = acc + curr;
    return acc;
}, 0)
// second argument is the initial value of the acc
console.log(output);

const findMax = arrmap.reduce((acc, curr)=>{
    if(curr > acc)
        acc = curr;
    return acc;
},0);
console.log(findMax);
