/*
  1. LexicalEnvironment:
  - Все переменные внутри функции – это свойства специального внутреннего объекта LexicalEnvironment
*/
function sayHi(name) {
  // LexicalEnvironment = { name: 'Вася', phrase: undefined }
  let phrase = "Привет, " + name;
  // LexicalEnvironment = { name: 'Вася', phrase: 'Привет, Вася'}
  console.log( phrase );
}
sayHi('Вася');

/*
  2. [[Scope]] - объект внутри функции, ссыляющийся на window/верхний объект
  - Вначале LexicalEnvironment ищет внутреннюю переменную с таким именем, далее идет в [[Scope]] (window)
  - [[Scope]] - объект переменных высшего объекта
*/
let userName = "Вася";
function sayHi2() {
  // sayHi2.[[Scope]] = window
  // sayHi2.[[Scope]].userName = "Вася";
  console.log( userName ); // "Вася"
  getFullName();

  function getFullName() {
    // getFullName.[[Scope]] = sayHi2
    console.log( userName ); // "Вася"
  }
}
sayHi2();

/*
  3. Closure - замыкание:
*/
function makeCounter() {
  function counter() {
    return counter.currentCount++; // Замыкание
  }
  counter.currentCount = 1; // Свойство фукнции counter, не переменная
  return counter;
}
let counter = makeCounter();
console.log( counter() ); // 1
counter.currentCount = 5;
console.log( counter() ); // 5