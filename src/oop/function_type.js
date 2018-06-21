/*
  1. Функциональное наследование
*/
function Machine() {
  let enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.call(this); // отнаследовать

  let waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();
console.log(coffeeMachine.getWaterAmount());
