console.log("Start");

function classDecorator(target: any, ...args: any) {
  console.log("=== class decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function propertyDecorator(target: any, ...args: any) {
  console.log("=== property decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function accessorGetDecorator(target: any, ...args: any) {
  console.log("=== accessorGet decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function accessorSetDecorator(target: any, ...args: any) {
  console.log("=== accessorSet decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function methodDecorator(target: any, ...args: any) {
  console.log("=== method decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}
function parameterDecorator(target: any, ...args: any) {
  console.log("=== parameter decorator ====================");
  console.log("* target:", target);
  console.log("* args:", args);
}

@classDecorator
export class Person {
  @propertyDecorator
  name = "";

  @accessorGetDecorator
  get isGood() {
    return true;
  }

  @accessorSetDecorator
  set height(value: any) {}

  @methodDecorator
  saySomething(thing: any) {}
}

console.log("Definition end");

const person = new Person();

console.log("End");
