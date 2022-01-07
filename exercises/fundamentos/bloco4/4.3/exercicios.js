let n = 5;

function exercicio1() {
  let asteriscos = '';

  console.log('1. \n')
  for (let largura = 0; largura < n; largura += 1) {
    asteriscos += '*';
  }
  for (let altura = 0; altura < n; altura += 1) {
    console.log(asteriscos);
  }
  console.log('\n');
}

function exercicio2() {
  let asteriscos = '';

  console.log('2. \n')
  for (let largura = 0; largura < n; largura += 1) {
    asteriscos += '*';
    console.log(asteriscos);
  }
  console.log('\n');
}

function exercicio3() {
  let espacos = '';
  let asteriscos = '';

  console.log('3. \n')
  for (let largura = 0; largura < n; largura += 1) {
    espacos += ' ';
  }
  for (let altura = 0; altura < n; altura += 1) {
    asteriscos += '*';
    console.log(espacos + asteriscos);
  }
  console.log('\n');
}

function exercicio4() {

}

function exercicios() {
  exercicio1();
  exercicio2();
  exercicio3();
  exercicio4();
}

exercicios();