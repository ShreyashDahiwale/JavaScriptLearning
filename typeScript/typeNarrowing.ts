class KulhadChai {
    serve() {   
        console.log("Serving Kulhad Chai");
    }
}

class CuttingChai {
    serve() {
        console.log("Serving Cutting Chai");
    }
}

function serveChai(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        chai.serve();
    } else {
        chai.serve();
    }
}

const kulhadChai = new KulhadChai();
const cuttingChai = new CuttingChai();

serveChai(kulhadChai); // Output: Serving Kulhad Chai
serveChai(cuttingChai); // Output: Serving Cutting Chai


type chaiOrder = {
    type: string;
    quantity: number;
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === 'object' && obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.quantity === 'number'
    );
}

function saveOrder (item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return console.log(`Saving order: ${item.quantity} ${item.type} chai`);
    } else {
        return console.log(`Saving order: ${item}`); // Assuming item is a string representing the order
    }
}


type MasalaChai = {
    type: 'Masala Chai';
    quantity: number;
}

type GingerChai = {
    type: 'Ginger Chai';
    quantity: number;
}

// type ChaiOrder = MasalaChai | GingerChai;

function processChaiOrder(order: MasalaChai | GingerChai) {
    if (order.type === 'Masala Chai') {
        console.log(`Processing order for ${order.quantity} Masala Chai`);
    } else {
        console.log(`Processing order for ${order.quantity} Ginger Chai`);
    }
}

const masalaOrder: MasalaChai = { type: 'Masala Chai', quantity: 2 };
const gingerOrder: GingerChai = { type: 'Ginger Chai', quantity: 3 };

processChaiOrder(masalaOrder); // Output: Processing order for 2 Masala Chai
processChaiOrder(gingerOrder); // Output: Processing order for 3 Ginger Chai



function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}

const mixedArray: unknown = ['Hello', 'World', 42];


// npm install -g typescript
// tsc typeNarrowing.ts
// node typeNarrowing.js