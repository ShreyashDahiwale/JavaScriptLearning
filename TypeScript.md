# TYPESCRIPT

1. **The difference between any and unknown?**
- *any*
    - Behavior: You can perform any operation (call methods, access properties, etc.) on an any variable without the compiler complaining.
    - Risk: Since it bypasses safety, it can lead to runtime errors if you perform an operation that the value does not actually support.
- *unknown*
    - Behavior: Like any, you can assign any value to unknown. However, you cannot perform any operations on it until you first narrow its type through type narrowing (e.g., using typeof or instanceof) or a type assertion.
    - Safety: It forces you to verify what the data is before using it, preventing accidental runtime crashes.

``` typescript
let valueAny: any = 10;
valueAny.toUpperCase(); // OK at compile-time, crashes at runtime

let valueUnknown: unknown = 10;
// valueUnknown.toUpperCase(); // Error: 'valueUnknown' is of type 'unknown'

if (typeof valueUnknown === "string") {
    valueUnknown.toUpperCase(); // OK: narrowed to string
}
```

2. **Type Narrowing**
- Type Narrowing is a TypeScript feature that refines the broader data type (like union string | number) into a more specific type i.e. just number or string, within a conditional block. 
- It uses a runtime checks, called type guards 
- typeof, instanceof, equality checks
- *typeof* checks the type of an variable
- *instanceof*: checks whether an object is an instace of a particular class or constructor function. It only works with classes and constructor functions
- Type Narrowing is something comes under the best practices of coding. 
```typescript
    class Animal {
    move() {
        console.log("Moving…");
    }
    }
    class Bird extends Animal {
        fly() {
            console.log("Flying…");
        }
    }
    function moveAnimal(animal: Animal): void {
        if (animal instanceof Bird) {
            // Inside this block, animal is narrowed to a Bird
            animal.fly();
        } else {
            // Inside this block, animal is still an Animal
            animal.move();
        }
    }
```