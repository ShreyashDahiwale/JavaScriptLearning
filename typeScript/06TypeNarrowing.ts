function getChai(kind: string | number) {
    if (typeof kind === 'string')
        return `Making ${kind} Chai!`;
    else
        return `Chai Order: ${kind}`;
}

function servChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving default masala Chai`;
}

function orderChai(size: "medium" | "large" | number) {
    if (size === "medium")
        return `Small cutting Chai`;
    else if (size === 'large')
        return `Large cutting`;
    return `Chai order #${size}`
}


class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`
    }
}


class Cutting {
    serve() {
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai)
        return chai.serve();
}


type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}


type MasalaChai = { type: 'Masala'; spiceLevel: number }
type GingerChai = { type: 'Ginger'; amount: number }

type Chai = MasalaChai | GingerChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "Masala":
            return `Masala Chai`;
        case "Ginger":
            return `Ginger Chai`;
    }
}


