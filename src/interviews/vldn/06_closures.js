// 1
function sayHelloTo(name) {
  const message = 'Hello ' + name;

  return function () {
    console.log(message);
  }
}

const helloToElena = sayHelloTo('Elena');
const helloToAlex = sayHelloTo('Alex');
helloToElena();
helloToAlex();

// 2
function createFrameworkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function () {
      console.log(fw.join(' '));
    },
    add: function (framework) {
      fw.push(framework);
    }
  };
}

const manager = createFrameworkManager();
console.log(manager);
manager.print();
manager.add('VueJs');
manager.print();

// 3 setTimeout
const fib = [1, 2, 3, 5, 8, 13];

for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
