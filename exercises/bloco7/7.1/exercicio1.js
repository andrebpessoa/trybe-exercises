const fatorial = (n) => (n <= 1) ? 1 : n * fatorial(n - 1);

const fatorial2 = (n) => (
  (n <= 1) ? 1 : n * fatorial(n - 1)
);

console.log(fatorial(3));
console.log(fatorial2(4));

// Cálculo fatorial: http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/