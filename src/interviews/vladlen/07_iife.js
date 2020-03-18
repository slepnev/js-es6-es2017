// Immediate Invoked Function Expression
// false
let result = [];
for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i);
  })
}

result[2]();

// true
let result2 = [];
for (var i = 0; i < 5; i++) {
  (function () {
    var j = i;
    result2.push(function () {
      console.log(j);
    })
  })();
}

result2[2]();
