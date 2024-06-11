const myNums = [1, 2, 3];
const initalValue = 0;

// let myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`Acc: ${acc} and CurrentValue: ${currVal}`);
//     return acc + currVal
// }, initalValue);


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JAVA Course",
        price: 2999
    },
    {
        itemName: "JavaScript Course",
        price: 1999
    },
    {
        itemName: "C++ Course",
        price: 999
    },
    {
        itemName: "Python Course",
        price: 1599
    }
];

let totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalAmount);
