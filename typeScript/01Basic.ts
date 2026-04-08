/*
    TypeScript is an Addon on JavaScript, it adds types to JavaScript. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript is developed and maintained by Microsoft.

    TypeScript provides static typing, which allows developers to catch errors at compile time rather than at runtime. This can help improve the reliability and maintainability of code. TypeScript also includes features such as classes, interfaces, and modules, which can help developers write more organized and modular code.


    TS  -- > Process --> JS
*/

function greet(name: string) : string {
    return `Hello, ${name}!`;
}

greet("Shreyash"); // Output: Hello, Shreyash!
// greet(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.