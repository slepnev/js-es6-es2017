/*
  1. this - контекст, берется из верхней функции, если ее нет то this = window
*/
let arr = ["a", "b"];
arr.push(function() {
  console.log(this);
});
arr[2](); // "a","b",function

/*
  2. Стрелочные функции принимают контектс текущего объекта, а не верхнего
*/
arr.push(() => console.log(this));
arr[3](); // global/window


/*
  3.
  . - точка это base-name-strict, после него идет потеря контекста
*/
let user = {
  name: "Вася",
  hi: function() { console.log(this.name); },
  bye: function() { console.log("Пока"); }
};
// а теперь вызовем user.hi или user.bye в зависимости от имени
(user.name == "Вася" ? user.hi : user.bye)(); // undefined
(user.hi)(); // Вася
(user.name == "Вася" ? user.hi() : user.bye()); // Вася