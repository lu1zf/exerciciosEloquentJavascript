/**
 * Zero é par.
 * Um é ímpar.
 * Para todo outro número N, sua paridade é a mesma de N - 2.
 * Defina uma função recursiva isEven que satisfaça as condições descritas acima.
 * A função deve aceitar um número como parâmetro e retornar um valor Booleano.
 */

function isEven(number) {
  if (number == 0) return true;
  else if (number == 1) return false;
  else return isEven(number - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
