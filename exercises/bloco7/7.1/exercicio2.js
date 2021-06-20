function longestWord(frase) {
  let palavra = '';
  let split = frase.split(' ');

  for (let index = 0; index < split.length; index += 1) {
    if (palavra.length < split[index].length) {
      palavra = split[index];
    }
  }
  return palavra;
};

console.log(longestWord('Qual a maior palavra dessa frase?????'));