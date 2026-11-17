
// Cenário 1: const b = a
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log("Cenário 1:");
console.log("a:", a); // [1, 2, 3, 4]
console.log("b:", b); // [1, 2, 3, 4]

// Cenário 2: const b = [...a]
const c = [1, 2, 3];
const d = [...c];

d.push(4);

console.log("Cenário 2:");
console.log("c:", c); // [1, 2, 3]
console.log("d:", d); // [1, 2, 3, 4]
