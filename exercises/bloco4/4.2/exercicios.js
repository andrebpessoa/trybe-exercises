let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function exercicio1() {
  console.log('1. ' + numbers)
}

function exercicio2() {
  let total = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log('2. ' + total);
}

function exercicio3() {
  let total = 0;
  let media = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  media = total / numbers.length;

  console.log('3. ' + media);
}

function exercicio4() {
  let total = 0;
  let media = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  media = total / numbers.length;

  if (media > 20) {
    console.log('4. Valor maior que 20');
  } else {
    console.log('4. Valor menor ou igual a 20');
  }
}

function exercicio5() {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log('5. O maior número é: ' + max)
}

function exercicio6() {
  let impar = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      impar++;
    }
  }

  if (impar === 0) {
    console.log('Nenhum valor ímpar encontrado');
  } else {
    console.log('6. Números ímpares na array: ' + impar);
  }
}

function exercicio7() {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log('7. O menor número é: ' + min)
}

function exercicio8() {
  let exercise8 = [];

  for (let i = 0; i <= 25; i += 1) {
    exercise8.push([i]);
  }
  console.log('8. ' + exercise8);
}

function exercicio9() {
  let exercise9 = [];

  for (let i = 0; i <= 25; i += 1) {
    exercise9.push([i] / 2);
  }
  console.log('9. ' + exercise9);
}

function exercicios() {
  exercicio1();
  exercicio2();
  exercicio3();
  exercicio4();
  exercicio5();
  exercicio6();
  exercicio7();
  exercicio8();
  exercicio9();
}

exercicios();