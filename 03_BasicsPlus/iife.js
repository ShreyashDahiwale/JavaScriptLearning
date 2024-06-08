// Immediately Invoked Function Expressions (IIFE)

// To avoid the Global Scope pollution like vairalbes and functions, and want to call the function immediately after creation then we use IIFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED!!!`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}
)('Shreyash');
