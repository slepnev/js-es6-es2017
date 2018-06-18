"use strict";

/*
  Arguments - праметры в функции.
  arguments - это не массив, можно только arguments[i] и arguments.length
*/
function sayHi() {
  for (var i = 0; i < arguments.length; i++) {
    console.log("Привет, " + arguments[i]);
  }
}
sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'

/*
  Аргументы по умолчанию через ||
*/
function showWarning(width, height, title, contents) {
  width = width || 200; // если не указана width, то width = 200
  height = height || 100; // если нет height, то height = 100
  title = title || "Предупреждение";
  //...
}