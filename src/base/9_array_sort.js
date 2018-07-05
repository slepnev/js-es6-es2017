/*
  1.1. Простая сортировка, сравнение элементов как числа
*/
arr.sort((a, b) => a - b); //по возрастанию
arr.sort((a, b) => b - a); //по убыванию
/*
  1.2. Типобезопасная сортировка
*/
arr.sort((a, b) => (a < b && -1) || (a > b && 1) || 0); //по возрастанию
arr.sort((a, b) => (a < b && 1) || (a > b && -1) || 0); //по убыванию
/*
  1.3. Сортировка нового массива
*/
let sortedArr = arr.slice().sort();

/*
  2. Преобразование массиво-подобного объекта в массив
*/
let object = {
  0: 'elem1',
  2: 'elem2',
  3: 'elem3',
  4: 'elem4',
  length: 5,
};
let arr = Array.from(object);
console.log(arr);

/*
  3. Сортировка массива объектов по их свойствам
*/
function compare(field, order) {
    let len = arguments.length;
    if(len === 0) {
        return (a, b) => (a < b && -1) || (a > b && 1) || 0;
    }
    if(len === 1) {
        switch(typeof field) {
            case 'number':
                return field < 0 ?
                    ((a, b) => (a < b && 1) || (a > b && -1) || 0) :
                    ((a, b) => (a < b && -1) || (a > b && 1) || 0);
            case 'string':
                return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
        }
    }
    if(len === 2 && typeof order === 'number') {
        return order < 0 ?
            ((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
            ((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
    }
    let fields, orders;
    if(typeof field === 'object') {
        fields = Object.getOwnPropertyNames(field);
        orders = fields.map(key => field[key]);
        len = fields.length;
    } else {
        fields = new Array(len);
        orders = new Array(len);
        for(let i = len; i--;) {
            fields[i] = arguments[i];
            orders[i] = 1;
        }
    }
    return (a, b) => {
        for(let i = 0; i < len; i++) {
            if(a[fields[i]] < b[fields[i]]) return orders[i];
            if(a[fields[i]] > b[fields[i]]) return -orders[i];
        }
        return 0;
    };
}

//Использование
arr.sort(compare()); //Обычная типобезопасная сортировка по возрастанию
arr.sort(compare(-1)); //Обычная типобезопасная сортировка по убыванию
arr.sort(compare('field')); //Сортировка по свойству field по возрастанию
arr.sort(compare('field', -1)); //Сортировка по свойству field по убыванию
/* Сортировка сначала по полю field1
   при совпадении по полю field2, а если и оно совпало, то по полю field3
   все по возрастанию */
arr.sort(compare('field1', 'field2', 'field3'));
/* Сортировка сначала по полю field1 по возрастанию
   при совпадении по полю field2 по убыванию */
arr.sort(compare({
    field1 : 1,
    field2 : -1
}));