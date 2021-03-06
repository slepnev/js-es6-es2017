"use strict";

/*
  1. this - контекст, берется из верхней функции, если ее нет то this = window
*/
var arr = ["a", "b"];
arr.push(function () {
  console.log(this);
});
arr[2](); // "a","b",function

/*
  2. Стрелочные функции теряют контекст
*/
arr.push(function () {
  return console.log(undefined);
});
arr[3](); // "a","b",function


/*
  3.
  . - точка это base-name-strict, после него идет потеря контекста
*/
var user = {
  name: "Вася",
  hi: function hi() {
    console.log(this.name);
  },
  bye: function bye() {
    console.log("Пока");
  }
};
// а теперь вызовем user.hi или user.bye в зависимости от имени
(user.name == "Вася" ? user.hi : user.bye)(); // undefined
user.hi(); // Вася
user.name == "Вася" ? user.hi() : user.bye(); // Вася