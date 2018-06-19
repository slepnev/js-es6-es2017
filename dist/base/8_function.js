"use strict";

/*
  1. Function Declaration:
  - создаются интерпретатором до выполнения кода
*/
sum(1, 2);
function sum(a, b) {
  return a + b;
}

/*
  2. Function Expression
  - выполняется только после инициализации
*/
var sum2 = function sum2(a, b) {
  return a + b;
};

/*
  3. Анонимные функции
  - без имени и не записывается в переменную, выполняется один раз
*/
function ask(question, yes, no) {
  if (confirm(question)) yes();else no();
}

ask("Вы согласны?", function () {
  console.log("Вы согласились.");
}, // Анонимная функция
function () {
  console.log("Вы отменили выполнение.");
} // Анонимная функция
);

/*
  3. new Function
  - создание функций на лету
*/
var sum3 = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
console.log(result); // 3