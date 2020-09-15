/**
 * Escreva um programa que imprima usando console.log() todos os números de 1 a
 * 100 com duas exceções. Para números divisíveis por 3, imprima Fizz ao invés
 * do número, e para números divisíveis por 5 (e não 3), imprima Buzz.
 *
 * Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz
 *  para números que são divisíveis ambos por 3 e 5 (e continue imprimindo Fizz
 *  e Buzz para números divisíveis por apenas um deles).
 */
var counter;
for (counter = 0; counter <= 100; counter++) {
  if (!(counter % 3) && !(counter % 5) && counter > 0) {
    console.log("FizzBuzz");
  } else if (!(counter % 3) && counter > 0) {
    console.log("Fizz");
  } else if (!(counter % 5) && counter > 0) {
    console.log("Buzz");
  } else {
    console.log(counter);
  }
}
