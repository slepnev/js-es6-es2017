// __proto__ (es6)
// Object.getPrototypeOf() (es5)

function Cat(name, color) {
  this.name = name;
  this.color = color;

}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says myay`);
};

const cat = new Cat('Kot', 'white');

cat.voice();
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.constructor);

// 2
function Person() {

}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Alex';

console.log(`skin` in person);
console.log(person.legs);
console.log(person.eyes);
console.log(person.name);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));

// 3 Object.create()
var proto = {year: 2019};
const year = Object.create(proto);

console.log(year.year);
console.log(year.hasOwnProperty('year'));
console.log(year.__proto__ === proto);

proto.year = 2200;
console.log(year.year);
proto = {year: 999};
console.log(year.year);

