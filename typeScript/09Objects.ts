const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

type TeaForChai = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: TeaForChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "cardamom", "cinnamon"]
}

type Item = {name: string; quantity: number;}
type Address = {street: string; pincode: number}

type Order = {
    id: string;
    item: Item[];
    address: Address
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates : Partial<Chai>) => {
   // update the chai with the provided updates
   console.log("Updating chai with:", updates);
}

updateChai({ price: 25 });


type ChaiOrder = {
    name?: string;
    price?: number;
    
}

const placeOrder = (order: Required<ChaiOrder>) => {
    // place the order with the provided details
    console.log("Placing order with:", order);
}

// placeOrder({ name: "Masala Chai" });
placeOrder({ name: "Masala Chai", price: 20 });


type BasicChaiInfo = Pick<Chai, "name" | "price">;