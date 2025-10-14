// Callback Functions

// To achieve asynchronous programming we use callbacks
// But, callback functions has two major problems. Callback Hell

const cart = ["Shoes","Shirt","Pant"];

orderCalculate(cart, function () {
    proceedToPayment(function (){
        showSummary(function (){
            orderDetails();
        });
    })
});

// Inversion of control: We can loose the control on our code. 
// Callback does not gurantee that it will execute the callback function.

fetch() 
// This is an API basically given by browsers to us to make external calls.     
// It return us a promise.

const promise = orderCalculate(cart);

promise.then(function (orderId){
    proceedToPayment(orderId);
});

// Promise provides us that gurantee to execute the callback function.

const data = fetch('https://google.com');
console.log(data);