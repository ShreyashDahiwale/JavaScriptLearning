type ChaiOrder = { type: string; sugar: number; strong: boolean }

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order);

// }
function makeChai(order: ChaiOrder) {
    console.log(order);
}

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order);
// }

function serveChai(order: ChaiOrder) {
    console.log(order);

}



type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}



// type CupSize = "small" | "large";
// class Chai implements CupSize {}
// A class can only implement an object type or intersection of object types with statically known members.ts(2422)

interface CupSize { size: "small" | "large" }

class Chai implements CupSize {
    size : "small" | "large" = "large"
}

interface TeaRecipe1 {
    water: number;
    milk: number
}
