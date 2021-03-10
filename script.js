const colorPalette = document.getElementById('color-palette');
const pixelLines = document.getElementById('pixel-board');
const pixelSpaces = document.getElementsByClassName('lines');
const colorBlock = document.getElementsByClassName('color');
const choosenColor = document.getElementsByClassName('selected')
const pixelChoosen = document.getElementsByClassName('pixel')
const clearBoard = document.getElementById('clear-board')
const createBoard = document.getElementById('generate-board')
const size = document.getElementById('board-size')




function createPaletteBlocks() {
  for (let index = 0; index <= 3; index += 1) {
    const paletteBlocks = document.createElement('div');
    paletteBlocks.className = 'color';
    colorPalette.appendChild(paletteBlocks);
  }
}

createPaletteBlocks();

function blockColor() {
  const firstblock = colorBlock[0];
  firstblock.style.backgroundColor = 'black';
  firstblock.className = 'color selected';
  for (let index = 1; index < colorBlock.length; index += 1) {
    colorBlock[index].style.backgroundColor = (
      `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`);
  }
}

blockColor();

function pixelBoard(){
for (let indexLine = 0; indexLine <= 4;  indexLine += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'lines';
    pixelLines.appendChild(pixelLine);
    for (let index = 0; index <= 4; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelSpaces[indexLine].appendChild(pixel);
    }
  }
}

pixelBoard()

function newpixelBoard() {
  let totalSize = size.value
  if (totalSize == ''){
    alert('Board inválido!')
  } else if (totalSize < 5){
      totalSize = 5;
  } else if (totalSize > 50){
      totalSize = 50;
    }
  for (let indexLine = 0; indexLine <= totalSize - 1; indexLine += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'lines';
    pixelLines.appendChild(pixelLine);
    for (let index = 0; index <= totalSize - 1; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelSpaces[indexLine].appendChild(pixel);
    }
  }
}

createBoard.addEventListener('click',newpixelBoard)

function selectPixel(colorChoose) {
  let colorClass = colorChoose.target.className;
  if ( colorClass.indexOf('selected') > 0 && colorClass.indexOf('color') > 0 ) {
    colorChoose.className = "color selected";
  } else {
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].className = 'color';
    }
    colorChoose.target.className += ' selected';
  }
}

colorPalette.addEventListener("click",selectPixel)

function paintPixels(pixelChoose){

  let colorToPixel = choosenColor[0].style.backgroundColor
  pixelChoose.target.style.backgroundColor = colorToPixel
}

for (let indexPix = 0; indexPix < pixelChoosen.length; indexPix += 1){
pixelChoosen[indexPix].addEventListener("click", paintPixels)
}

function clear() {
  for (let indexPix = 0; indexPix < pixelChoosen.length; indexPix += 1) {
    pixelChoosen[indexPix].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', clear);

