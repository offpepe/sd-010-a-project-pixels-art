const color = document.getElementsByClassName('color');
const colorPalette = document.getElementById('color-palette');
const pixelsListElements = document.getElementsByClassName('pixel');
const selectElementColor = document.getElementsByClassName('selected')[0];

function corTroca() {
  for (let corIndex = 0; corIndex < color.length; corIndex += 1) {
    color[corIndex].addEventListener('click', function () {
      colorPalette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

corTroca();

function colorSelection () {
  for (let i = 0; i < pixelsListElements.length; i += 1) {
    pixelsListElements[i].addEventListener('click', function () {
      if (selectElementColor.classList.contains('backBlack')) {
        pixelsListElements[i].style.backgroundColor = 'black'
    } else if (selectElementColor.classList.contains('backRed')) {
      pixelsListElements[i].style.backgroundColor = 'red'
    } else if (selectElementColor.classList.contains('backBlue')) {
       pixelsListElements[i].style.backgroundColor = 'blue'
    } else if (selectElementColor.classList.contains('backGreen')) {
       pixelsListElements[i].style.backgroundColor = 'green'
    }
  })
 }
}
colorSelection ()

  
  
 