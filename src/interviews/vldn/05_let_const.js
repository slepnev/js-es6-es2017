// Let
let a = 'Variable a';
let b = 'Variable b';

{
  a = 'New Varibale A';
  let b = 'Local Variable B';
  console.log('Scope A', a);
  console.log('Scope B', b);
}
console.log('A:', a);
console.log('B:', b);

// Const
const PORT = 8080;
const array = ['Java', 'is', 'strong'];
array.push('!');
array[0] = 'JS';
console.log(array);

const obj = {};
obj.name = 'AAA';
obj.age = 28;
