// 1
const person = {
  surname: 'Stark',
  knows: function (what, name) {
    console.log(`You ${what} know, ${name} ${this.surname}`);
  }
};

const john = {surname: 'Snow'};

person.knows('all', 'Bran');
person.knows.call(john, 'not all', 'John');
person.knows.apply(john, ['not all', 'John']);
const personJohn = person.knows.bind(john, 'not all', 'John');
personJohn();


// 2
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

const elena = new Person('Elena', 20);

// 3 Явный контекст
function logThis() {
  console.log(this);
}

const obj = {num: 42};
logThis.apply(obj);

// 4 Не явный контекст
const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  }
};

animal.logThis();

// 5 Arrow function context
function Cat(color) {
  this.color = color;
  console.log('this', this);
  (() => console.log('Arrow this', this))();
}

new Cat('red');
