const blackPalette = document.querySelector('.black-palette');
const redPalette = document.querySelector('.red-palette');
const bluePalette = document.querySelector('.blue-palette');
const greenPalette = document.querySelector('.green-palette');
blackPalette.style.backgroundColor = 'black';
redPalette.style.backgroundColor = '#ff6961';
bluePalette.style.backgroundColor = '#3065ac';
greenPalette.style.backgroundColor = '#7d7';

window.onload = () => {
  const blackPallet = document.querySelector('.black-palette');
  blackPallet.className = 'color black-palette selected';
};

// Cria uma div e recebe como parametro o nome da classe da div
function createPixel(className) {
  const pixel = document.createElement('div');
  pixel.className = className;
  return pixel;
}
// Cria uma quebra de linha
function createBreakLine() {
  const breakLine = document.createElement('br');
  return breakLine;
}

// Cria o pixel board dinamicamente
function createBoardPixel() {
  const selectPixelBoard = document.querySelector('#pixel-board');

  for (let line = 0; line < 5; line += 1) {
    for (let index = 0; index < 5; index += 1) {
      const newPixel = createPixel('pixel');
      selectPixelBoard.appendChild(newPixel);
    }
    const breakLine = createBreakLine();
    selectPixelBoard.appendChild(breakLine);
  }
}

createBoardPixel();

// add a classe selected ao clicar nas em alguma color palette
function setClassSelected() {
  const colorPalette = document.querySelectorAll('.color');

  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (event) => {
      event.target.classList.toggle('selected');
    });
  }
}

setClassSelected();

// Pinta os pixels ao clicar nele
function paintPixels() {
  const pixelsBoard = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsBoard.length; index += 1) {
    pixelsBoard[index].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    });
  }
}

paintPixels();

// Apaga o pixel-board
function clearBoard() {
  const pixelsBoard = document.querySelectorAll('.pixel');
  const erase = document.querySelector('#clear-board');

  for (let index = 0; index < pixelsBoard.length; index += 1) {
    erase.addEventListener('click', () => {
      pixelsBoard[index].style.backgroundColor = 'white';
    });
  }
}

clearBoard();
