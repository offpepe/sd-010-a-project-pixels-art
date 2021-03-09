const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

const paletteColors = ['black', 'blue', 'red', 'green'];
let selectedColor = 0;
const pixelColumns = 5;
const pixelRows = 5;

function setPaletteColors() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorPalette.appendChild(colorDiv);

    const currentColor = paletteColors[index];
    colorDiv.style.backgroundColor = currentColor;
  }
}

function setPixels() {
  for (let index = 1; index <= pixelColumns * pixelRows; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

function selectColor() {
  const colorDivs = document.querySelectorAll('.color');
  colorDivs[selectedColor].className += ' selected';
}

setPaletteColors();
setPixels();
selectColor();
