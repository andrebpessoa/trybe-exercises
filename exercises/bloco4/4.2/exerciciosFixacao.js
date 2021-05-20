function exercicio1() {
  let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  let menuServices = menu[1];
  let indexOfPortfolio = menu.indexOf('Portfólio');
  menu.push('Contato');

  console.log(menuServices);
  console.log(indexOfPortfolio);
  console.log(menu);

  console.log('');
}

function exercicio2() {
  let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

  for (i = 0; i < groceryList.length; i += 1) {
    console.log('Lista do mercado: ' + groceryList[i]);
  }
  console.log('');
}

function exercicio3() {
  let names = ['João', 'Maria', 'Antônio', 'Margarida'];

  for (let name of names) {
    console.log('Lista de nomes: ' + name);
  }
}

function exercises() {
  exercicio1();
  exercicio2();
  exercicio3();
}

exercises();
