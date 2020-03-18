// 1
function Cat(color, name) {
  this.color = color;
  this.name = name;
}

const cat = new Cat('black', 'Vasya');
console.log(cat);

// 2 polyfill New
function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}

const cat2 = myNew(Cat, 'black', 'Kot');
console.log(cat2);
