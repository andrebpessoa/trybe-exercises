let a = 10;
let b = 5;
let c = 25;
let x = 90;
let y = 30;
let z = 60;
let operacao = "+";

if (operacao === "+") {
  let conta = a + b;
  console.log('1. O resultado é: ' + conta);
} else if (operacao === "-") {
  let conta = a - b;
  console.log('1. O resultado é: ' + conta);
} else if (operacao === "*") {
  let conta = a * b;
  console.log('1. O resultado é: ' + conta);
} else if (operacao === "/") {
  let conta = a / b;
  console.log('1. O resultado é: ' + conta);
} else if (operacao === "%") {
  let conta = a % b;
  console.log('1. O resultado é: ' + conta);
} else {
  console.log("1. Não foi possível fazer uma operação")
}

if (a > b) {
  console.log('2. O maior número é: ' + a);
} else {
  console.log('2. O maior número é: ' + b);
}

if (a > b && a > c) {
  console.log('3. O maior número é: ' + a);
} else if (b > a && b > c) {
  console.log('3. O maior número é: ' + b);
} else if (c > a && c > b) {
  console.log('3. O maior número é: ' + c);
} else {
  console.log('3. Não foi possível realizar a operação');
}

if (a > 0) {
  console.log('4. Positivo');
} else if (a < 0) {
  console.log('4. Negativo');
} else {
  console.log('4. Zero');
}

if (x + y + z === 180) {
  console.log('5. A soma dos números é igual a 180');
} else {
  console.log('5. A soma não é igual a 180');
}
