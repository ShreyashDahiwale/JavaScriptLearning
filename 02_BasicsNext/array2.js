const marvel_heros = ["Thor", "Ironman", "SpiderMan"]
const dc_heros = ["Batman", "Flash", "Superman"]

// marvel_heros.push(dc_heros);
// marvel_heros.push(...dc_heros);

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros);

// Spread operator "..."

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 4, 3, [5, 6, 7], 8, 9, 10, [1, 3, 5, [9, 0]]];

const usableAnotherArray = another_array.flat(Infinity);
console.log(usableAnotherArray);

console.log(Array.isArray("Shreyash"));
console.log(Array.from("Shreyash"));

console.log(Array.from({name: "Shreyash"})); // Interesting -> return [] (you have to mention keys or values)

let sc1=100;
let sc2=200;
let sc3=300;

console.log(Array.of(sc1, sc2, sc3));