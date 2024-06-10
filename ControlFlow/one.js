/*
// Falsy Values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
"0", "false", " ", [], {}, function(){}
*/

let emptyObj = {}
if(Object.keys(emptyObj).length > 0){}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = null ?? 10;
var1 = undefined ?? 15