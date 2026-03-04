// Union Types allow us to define a variable that can hold multiple types of values. We can use the pipe (|) operator to specify the different types that a variable can accept.
let subs: number | string = 10;
let subsU: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';
// apiRequestStatus = 'failed'; // Error: Type '"failed"' is not assignable to type '"pending" | "success" | "error"'.

let airLineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

// --------------------------------------------
const orders = ['10', '20', '30'];
let currentOrder: string | undefined;

for(let order of orders) {
    if(order === '20') {
        currentOrder = order;
        break;
    }
}

// currentOrder is of type string | undefined because it can either be assigned a string value from the orders array or remain undefined if the loop completes without finding '20'.
