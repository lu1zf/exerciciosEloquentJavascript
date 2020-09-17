/**
 * Escreva uma função countBs que receba uma string como único argumento e 
 * retorna o número que indica quantos caracteres "B", em maiúsculo, estão 
 * presentes na string.

 * Em seguida, escreva uma função chamada countChar que se comporta de forma
 * parecida com countBs, exceto que ela recebe um segundo argumento que indica
 *  o caractere que será contado (ao invés de contar somente o caractere "B" em
 *  maiúsculo). Reescreva countBs para fazer essa nova funcionalidade.
 */

function countBs(word) {
  var counter = 0;
  for (var position = 0; position < word.length; position++) {
    if (word.charAt(position) == "B") counter++;
  }
  return counter;
}

function countChar(word, char) {
  var counter = 0;
  for (var position = 0; position < word.length; position++) {
    if (word.charAt(position) == char) counter++;
  }
  return counter;
}

console.log(countBs("BBCBBCBB"));
//-> 6
console.log(countChar("kakkerlak", "k"));
//-> 4
