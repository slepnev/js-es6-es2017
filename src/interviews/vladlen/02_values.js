// 1
let a1 = 42;
let b1 = a1;
b1++;

console.log('a', a1);
console.log('b', b1);

// 2
let a2 = [1, 2, 3];
let b2 = a2;
b2.push(4);
let c2 = [1, 2, 3, 4];

console.log('a', a2);
console.log('b', b2);
console.log(a2 === b2);
console.log(a2 === c2);
