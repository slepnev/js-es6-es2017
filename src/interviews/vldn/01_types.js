// 7 типов данных:
// null, undefined, boolean, number, string, object, symbol
// - все приметивные кроме Object

console.log(typeof 0);
console.log(typeof true);
console.log(typeof 'String');
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof Symbol('JS'));
console.log(typeof null);
console.log(typeof []);
console.log(typeof function () {});

// Приведение типов
let language = 'JavaScript';
if (language) {
  console.log('The best language is: ', language);
}

// False:
// '', 0, null, undefined, NaN, false
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Строки и числа
console.log(1 + '2');
console.log(1 - '2');
console.log('2' * '2');
console.log(4 + 10 + 'px');

// == vs ===
// == - приведение типов
// === - сравнивает значения без приведения
console.log(2 == '2');
console.log(2 === '2');
console.log(undefined == null);
console.log(undefined === null);
// =====
console.log(false == '');
console.log(false == []);
console.log(false == {});
console.log('' == '');
console.log('' == []);
console.log('' == {});
console.log(0 == '');
console.log(0 == []);
console.log(0 == {});
