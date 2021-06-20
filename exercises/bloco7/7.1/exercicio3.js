const button = document.getElementById('clicker');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
  let number = Number(counter.value);
  number += 1;
  console.log('teste');
});
