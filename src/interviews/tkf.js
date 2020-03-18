/*
  1. Написать полифилл для Object.create(a)
*/
function inherit(proto) {
  function F() {}     // (1)
  F.prototype = proto; // (2)
  let obj = new F(); // (3)
  return obj;      // (4)
}

let animal = {
  eats: true
};
let rabbit = inherit(animal);
console.log( rabbit.eats ); // true

/*
  2. Написать функцию проверки сортировки массива в любую сторону, ответ true/false
  - [1,2,3,4] = true
  - [4,3,2,1] = true
  - [4,5,3,6,1] = false
*/
function ifSort(arr){
  let ask = true;
  let desk = true;
  let len = arr.length;
  arr.forEach((item, i, arr) => {
    if(i+1 < len){
      if(ask && item > arr[i+1]){
        ask = false;
      }
      if(desk && item < arr[i+1]){
        desk = false;
      }
    }
  });
  return ask || desk;
}
console.log(ifSort([1,2,3,4]));
console.log(ifSort([4,3,2,1]));
console.log(ifSort([4,5,3,6,1]));

/*
  3. Сравнить два массива, и отдать массив их общих параметров.
  - [1,2,3,4] [4,5,3,6,1]  = [1,3,4]
*/
function diff(a1, a2) {
    return a1.filter(val => a2.indexOf(val) >= 0);
}
console.log(diff([1,2,3,4], [4,5,3,6,1]));

/*
  4. Функции-стрелки не имеют своего this
*/
let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    this.students.forEach(function(student) {
      console.log(this.title + ': ' + student); // будет ошибка
    });
    //  Решение:
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    )
  }
};
group.showList();