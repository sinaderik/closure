function outer(name) {
  // outer function is invoked and finished
  console.log("outer function");
  function inner() {
    // 'keep the state even after the outer function is finished'
    console.log(`Hi my name is ${name}`);
  }
  inner();
}
outer("sina");

function createCounter(number = 0) {
  return function plus() {
    return ++number;
  };
}
const counter = createCounter(1);

console.log(counter());
console.log(counter());

function counterWithoutClosure(number) {
  return ++number;
}
const normalCounter = counterWithoutClosure(10);
console.log(normalCounter);
console.log(normalCounter);
