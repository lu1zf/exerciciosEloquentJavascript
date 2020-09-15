/**
 * Escreva um programa que cria uma string que representa uma grade 8x8, 
 * usando novas linhas para separar os caracteres. A cada posição da grade 
 * existe um espaço ou um caractere "#". Esses caracteres formam um tabuleiro 
 * de xadrez.
 * 
 * Passando esta string para o console.log deve mostrar algo como isto:
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #

* Quando você tiver o programa que gere este padrão, defina a variável size = 8 
* e altere programa para que ele funcione para qualquer size, a saída da grade de 
* largura e altura.
 */
var linesCounter;
var charCounter = 0;
var gradeStr = "";
var size = 10;

for (linesCounter = 0; linesCounter < size; linesCounter++) {
  for (charCounter = 0; charCounter < size; charCounter++) {
    if (charCounter % 2) {
      gradeStr += " ";
    } else {
      gradeStr += "#";
    }
  }

  if (!(linesCounter % 2)) {
    gradeStr += "\n ";
  } else {
    gradeStr += "\n";
  }
}
console.log(gradeStr);
