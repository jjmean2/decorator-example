console.log("Start");

function classDecorator(target, ...args) {
  console.log("=== class decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function propertyDecorator(target, ...args) {
  console.log("=== property decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function accessorGetDecorator(target, ...args) {
  console.log("=== accessorGet decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function accessorSetDecorator(target, ...args) {
  console.log("=== accessorSet decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function methodDecorator(target, ...args) {
  console.log("=== method decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function parameterDecorator(target, ...args) {
  console.log("=== parameter decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}

export
@classDecorator
class Person {
  @propertyDecorator
  name = "";

  @accessorGetDecorator
  get isGood() {
    return true;
  }

  @accessorSetDecorator
  set height(value) {}

  @methodDecorator
  saySomething(thing) {}
}

console.log("Definition end");

const person = new Person();

console.log("End");
