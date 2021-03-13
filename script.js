function paleta() {
  for (let index = 1; index <= 4; index += 1) {
    const tagDiv = document.createElement('div');
    const tagPai = document.querySelector('#color-palette');
    tagPai.appendChild(tagDiv);
    tagDiv.classList.add('color');
  }
}
paleta();

function coresDaTabela() {
  const cores = document.getElementsByClassName('color');
  cores[0].style.backgroundColor = 'black';
  cores[1].style.backgroundColor = 'blue';
  cores[2].style.backgroundColor = 'pink';
  cores[3].style.backgroundColor = 'green';
}
coresDaTabela();

function quadroDePixels() {
  for (let index = 1; index <= 5; index += 1) {
    const pixelsPai = document.createElement('div');
    const tagPai = document.getElementById('pixel-board');
    tagPai.appendChild(pixelsPai);
    for (let index = 1; index <= 5; index += 1) {
      const pixels = document.createElement('div');
      pixelsPai.appendChild(pixels);
      pixels.classList.add('pixel');
    }
  }
}
quadroDePixels();

function corBlack() {
  const corBlack1 = document.getElementsByClassName('color')[0].classList.add('selected');
}
corBlack();
/* Neste requisito recebi ajuda do amigo Lucas Godoi turma 10 tribo A, mas obtive total entendimento da questão */
function click() {
  const recuperar = document.getElementById('color-palette'); /* Estou pegando minha classe pai */
  recuperar.addEventListener('click', (e) => {  /* Passando um evento de clic para minha classe pai com a propriedades de evento! */
    const target1 = e.target;  /* Estou atribuindo a propriedade target do meu evento click ao meu (parametro (e))*/
    if (target1.classList.contains('color')) { /* SE - localName da minha propriedade target do meu evento for igual a 'div'*/
      const recuperaColor = document.querySelectorAll('.color'); /* Estou recuperando a minha classe 'color' */
      for (let index = 0; index < recuperaColor.length; index += 1) { /* Pegando todos os indexda minha classe 'color' */
        recuperaColor[index].classList.remove('selected');/* Remove de todos meus indexa classe 'selected' */
      }
      target1.classList.add('selected'); /* então add a classe selected */
    }
  });
}
click();

/* 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta 
faz com que o pixel seja preenchido com a cor selecionada. 

O que será verificado:

Verifica se ao carregar a página deve ser possível pintar os pixels de preto
Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor
Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar 
na cor dos demais pixels. */

function pint() {
  const selectedColor = document.querySelector('#pixel-board')
  selectedColor.addEventListener('click', (e) => {
    const target2 = e.target;
    const recupera = document.querySelector('.selected').style.backgroundColor;
    if (target2.classList.contains('pixel')) {
      target2.style.backgroundColor = recupera
    }
  });
}
pint();




