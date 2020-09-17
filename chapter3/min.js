/**
 * Escreva uma função min que recebe dois argumentos e retorna o menor deles.
 */

function min(number1, number2) {
  if (number1 != number2) {
    if (number1 > number2) return number2;
    else return number1;
  } else {
    return console.log("number 1 = number 2");
  }
}

console.log(min(0, 10));
console.log(min(0, -10));
min(0, 0);
