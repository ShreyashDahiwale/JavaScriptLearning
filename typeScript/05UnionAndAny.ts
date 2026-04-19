// Union 
let subs : number | string = 22;
subs = "22M";


let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
apiRequestStatus = 'success';
// apiRequestStatus = 'failed'; // Error: Type '"failed"' is not assignable to type '"pending" | "success" | "error"'.  



// Any
const orders = ['27', '28', '29'];

// let currentOrder; // Type of currentOrder is any
let currentOrder: string | undefined; // Type of currentOrder is string or undefined

for(let order of orders) {
    if(order ==='28') {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);

