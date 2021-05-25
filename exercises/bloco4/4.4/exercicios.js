function verifyPalindrome(string) {
  let caracteres = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(caracteres, '');
  let tamanho = string.length;

  for (let i = 0; i < tamanho / 2; i += 1) {
    if (string[i] !== string[tamanho - 1 - i]) {
      return false;
    }
  } return true;
}

function biggerIndice(numeros) {
  let maiorIndice = 0;

  for (let indice in numeros) {
    if (numeros[maiorIndice] < numeros[indice]) {
      maiorIndice = indice;
    }
  }
  return maiorIndice;
}

function lowerIndice(numeros) {
  let menorIndice = 0;

  for (let indice in numeros) {
    if (numeros[menorIndice] > numeros[indice]) {
      menorIndice = indice;
    }
  }
  return menorIndice;
}

console.log('1. A palavra/frase inserida é um palíndromo? ' + verifyPalindrome('subi. no /onibus'));
console.log('2. O maior índice é ' + biggerIndice([2, 3, 6, 7, 10, 1]));
console.log('2. O maior índice é ' + lowerIndice([2, 4, 6, 7, 10, 0, -3]));