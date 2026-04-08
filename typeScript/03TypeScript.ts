let drink = 'water';

let cups = Math.random() > 0.5 ? 1 : "2";
// cups = 3; // Error: Type 'number' is not assignable to type 'string | number'
// 'string | number' this is inference of union type, it means that the variable can be either a string or a number.

let newVar : string = "Hello World";
// the above example is called as Annotation, it is used to explicitly specify the type of a variable. It is not necessary to use annotation in TypeScript, as the compiler can infer the type of a variable based on its value. However, it can be useful to use annotation when the type of a variable cannot be inferred or when you want to provide additional information about the type of a variable.