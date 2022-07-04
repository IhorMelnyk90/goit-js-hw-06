const spanColorEl = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener('click', onColorChangeByClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChangeByClick(){
  let randomColor = getRandomHexColor();  
  spanColorEl.textContent = randomColor;
  document.body.setAttribute('style', `background-color: ${randomColor}`);
 }