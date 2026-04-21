// Type Assertion

let response: any = "42";

// Forceful Type Assertion
let numericLength: number = (response as string).length;


type Book = {
    name: string
}

let bookString = '{"name": "Who moved my Cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

// We have to force the type 
const inputElement = document.getElementById("username") as HTMLInputElement;


let value: any
value = 'chai'
value = [1,2,3]
value = 2.4
value.toUpperCase() // Will not throw any error


let newValue: unknown
newValue = [1,2,3]
newValue = 2.4
// newValue.toUpperCase() error
// here we have to do type narrowing


try {
    
} catch (error: any) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}

const data: unknown = "Chai aur Code";
const strData: string = data as string

// --------------------------------------------------------------------------------------

// Never

type Role = "Admin" | "User"; 

function redirectBasedOnRole(role: Role) : void {
    if(role === "Admin"){
        console.log(`Redirecting to Admin Dashboard`);
        return;
    }
    
    if(role === "User"){
        console.log(`Redirecting to User Dashboard`);
        return
    }
    
    role; // (parameter) role: never
}