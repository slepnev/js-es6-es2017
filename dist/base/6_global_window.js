"use strict";

/* 1. window - глобальный объект
  - Функции, объявленные как Function Declaration, создаются полностью и готовы к использованию.
  - Переменные объявлены, но равны undefined. Присваивания выполнятся позже, когда выполнение дойдет до них.
*/
if ("a" in window) {
  a = 1;
}
var a;
console.log(a);