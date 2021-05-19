let a = 10;
let b = 5;
let operacao = "+";

if (operacao == "+") {
  let conta = a + b;
  console.log(conta);
} else if (operacao == "-") {
  let conta = a - b;
  console.log(conta);
} else if (operacao == "*") {
  let conta = a * b;
  console.log(conta);
} else if (operacao == "/") {
  let conta = a / b;
  console.log(conta);
} else if (operacao == "%") {
  let conta = a % b;
  console.log(conta);
} else {
  console.log("Não foi possível fazer uma operação")
}
