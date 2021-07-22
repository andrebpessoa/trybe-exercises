let body = document.querySelector('body');

//Adicionando elementos novos
function addElement(elemento, pai, classe, src) {
  let elementToAdd = document.createElement(elemento)
  elementToAdd.className = classe;
  elementToAdd.src = src;
  pai.appendChild(elementToAdd);
}

addElement('h1', body, 'title');
addElement('div', body, 'main-content');

//Elementos já criados
let mainContent = document.querySelector('.main-content');
addElement('div', mainContent, 'center-content');
addElement('div', mainContent, 'left-content');
addElement('div', mainContent, 'right-content');

let centerContent = document.querySelector('.center-content');
let leftContent = document.querySelector('.left-content');
let rightContent = document.querySelector('.right-content');
addElement('p', centerContent, 'text');
addElement('img', leftContent, 'small-image', 'https://picsum.photos/200');
addElement('ul', rightContent, 'valores');

//Manipulando novos elementos
document.querySelector('.title').innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('.text').innerText = 'Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P Um texto na tag p :P ';

let numeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let i = 0; i < 10; i += 1) {
  let ul = document.querySelector('.valores');
  let li = document.createElement('li');
  ul.appendChild(li).innerText += numeros[i];
}

for (let i = 0; i < 3; i += 1) {
  let h3 = document.createElement('h3');
  mainContent.appendChild(h3);
  h3.innerText += 'Texto da H3'
}

