/*
  1. bind - сохранение контекста, обертка, которую можно вызвать позже
*/
let user = {
  firstName: "Вася",
  sayHi: function() {
    console.log( this.firstName );
  }
};
setTimeout(user.sayHi, 500); // this потерян
setTimeout(user.sayHi.bind(user), 1000); // this сохранен
setTimeout(() => user.sayHi(), 1500); // this сохранен

/*
  2. Карринг - сохранение аргументов
*/
function mul(a, b) {
  return a * b;
}
// double умножает только на два
let double = mul.bind(null, 2); // контекст фиксируем null, он не используется
console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10