"use strict";

/*
   1. Копирование по значению:
      строки, числа, булевы значения, null/undefined
   при присваивании переменных копируются целиком
*/
var a = 0;
function foo(a) {
   // здесь своя локальная a
   a = 10;
}
console.log(a); // 0
foo(a);
console.log(a); // 0

/*
   2. Копирование по ссылке:
      массивы, объекты, функции
   В переменной, которой присвоен объект, хранится не сам объект, а «адрес его места в памяти».
*/
var user = { name: "Вася" };
var admin = user; // скопировали ссылку
admin.name = 'Петя'; // поменяли данные через admin
console.log(user); // 'Петя', изменения видны в user

/*
   3. Изменение объектов:
*/
var data = { a: 0 };
function foo2(data) {
   // хоть здесь опять же локальная переменная data
   // но передается уже по ссылке
   data.a = 10;
}
console.log(data); // 0
foo2(data);
console.log(data); // 10

/*
   4. Клонирование объектов:
*/
var clone = Object.assign({}, user);
clone.name = "Вася"; // поменяли данные в clone
console.log(clone);
console.log(user); // по-прежнему "Петя"