function handleClick() {
  alert("I got clicked!!");
}

var select = document.querySelectorAll(".drum");

for (let i = 0; i <= select.length; i++) {
  select[i].addEventListener("click", handleClick);
}

// function add(num1, num2) {
//   return num1 + num2;
// }
//
// function multiply(num1, num2) {
//   return num1 * num2;
// }
//
// function subtract(num1, num2) {
//   return num1 - num2;
// }
//
// function divide(num1, num2) {
//   return num1 / num2;
// }
//
// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }
//
// calculator(3, 4, divide);
