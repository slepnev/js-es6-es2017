/*
  1. Композиция - это комбинирование двух или более функции чтобы создать новую функцию
  * Для функционального программирования существуют спец. библиотеки: Ramda
*/

// Без переменных:
const toSlug = input => encodeURIComponent(
  input.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
);

// Через переменные:
// const toSlug = input => {
//   const words = input.split(' ');
//   const lowercaseWords = words.map(word => word.toLowerCase());
//   const slug = lowercaseWords.join('-');
//   const encodedSlug = encodeURIComponent(slug);
//
//   return encodedSlug;
// };

const slug = toSlug('This is composition');