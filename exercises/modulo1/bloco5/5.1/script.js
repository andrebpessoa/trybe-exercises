function pText(string) {
  let p = document.getElementsByTagName('p');

  for (let i = 0; i < p.length; i += 1) {
    p[i].innerText = string;
  }
  for (let i = 0; i < p.length; i += 1) {
    p[i].innerText = string.toUpperCase();
  }
  for (let i = 0; i < p.length; i += 1) {
    console.log(p[i]);
  }
}

function colorChange() {
  let mainContent = document.getElementsByClassName('main-content');
  let centerContent = document.getElementsByClassName('center-content');

  for (var i = 0; i < mainContent.length; i++) {
    mainContent[i].style.backgroundColor = 'rgb(76, 164, 109)';
  }
  for (var i = 0; i < centerContent.length; i++) {
    centerContent[i].style.backgroundColor = 'white';
  }
}

function fixTitle() {
  document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript'
}

fixTitle();
colorChange();
pText('Parágrafo modificado');