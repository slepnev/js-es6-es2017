function makeArray(arg1, arg2){
  console.log([ this, arg1, arg2 ]);
}

/*
  1. Apply - передача контектса (приоритетнее)
*/
let car = { year: 2008, model: 'Dodge Bailout' };
makeArray.apply( car, [ 'one', 'two' ] ); // => [ car, 'one', 'two' ]

/*
  2. Call - тоже самое, только другой синтаксис передачи аргументов
*/
makeArray.call( car, 'one', 'two' ); // => [ car, 'one', 'two' ]