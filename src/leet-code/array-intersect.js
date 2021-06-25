// Задача: Найти пересечение двух массивов
const input1 = [1,2,2,1];
const input2 = [2,2];
// Output: [2,2]

const input3 = [4,9,5];
const input4 = [9,4,9,8,4];
// Output: [4,9] or [9,4]

/* _________________________________________________ */

/* Решение 1: Через использование хэш-мапа
* [1,2,2,1] = {
*   [1]: 2,
*   [2]: 2
* }
*
* Сложность:
*  время - O(n+m)
*  память - O(n)
* */
const intersect = function (nums1, nums2) {
  let result = [];

  let hashMap = nums1.reduce((obj, item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;

    return obj;
  }, {});

  nums2.forEach((item) => {
    let count = hashMap[item];

    if (count && count > 0) {
      result.push(item);
      hashMap[item] -= 1;
    }
  });

  return result;
}

console.log(intersect(input1, input2));
console.log(intersect(input3, input4));
