/*
  1. Прототип объекта __proto__ [[Prototype]]
  - Если один объект имеет специальную ссылку __proto__ на другой объект, то при чтении свойства из него, если свойство отсутствует в самом объекте, оно ищется в объекте __proto__.
*/
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
// в rabbit можно найти оба свойства
console.log( rabbit.jumps ); // true
console.log( rabbit.eats ); // true
delete rabbit.jumps; // Всегда удаляет свойство основного объекта, proto не трогает

/*
  2. hasOwnProperty
  - obj.hasOwnProperty(prop) возвращает true, если свойство prop принадлежит самому объекту obj, иначе false.
*/
let animal2 = {
  eats: true
};
let rabbit2 = {
  jumps: true,
  __proto__: animal2
};
console.log( rabbit2.hasOwnProperty('jumps') ); // true: jumps принадлежит rabbit
console.log( rabbit2.hasOwnProperty('eats') ); // false: eats не принадлежит

/*
  3. Object.create(null)
  - не имеет прототипа, полезен для создания коллекции
*/
let data = Object.create(null);
data.text = "Привет";
console.log(data.text); // Привет
console.log(data.toString); // undefined

/*
  Методы [[Prototype]]
*/
let obj = {car: 'Ferrai'};
let proto = {user: 'Misha'};

let obj2 = Object.setPrototypeOf(obj, proto); // Запись: Устанавливает obj.__proto__ = proto (кроме IE10-).
let obj1 = Object.getPrototypeOf(obj); // Чтение: Возвращает obj.__proto__ (кроме IE8-)
let obj3 = Object.create(proto); // Создание объекта с прототипом: Создаёт пустой объект с __proto__

console.log(obj1); // { user: 'Misha' }
console.log(obj2.__proto__); // { user: 'Misha' }
console.log(obj3.__proto__); // { user: 'Misha' }
