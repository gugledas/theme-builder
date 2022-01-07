import "./scss/style.scss";
console.log("Hello webpack!");

const functionTest = () => {
  return [2, "string", true];
};

const [a, b, c] = functionTest();

console.log(a);
console.log(b);
console.log(c);
