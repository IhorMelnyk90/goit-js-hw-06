const getAmountBoxes = document.querySelector('input');
const getButtonCreate = document.querySelector('[data-create]');
const getButtonDestroy = document.querySelector('[data-destroy]');
const getBoxes = document.querySelector('#boxes');

getButtonCreate.addEventListener('click', createBoxes);
getButtonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = getAmountBoxes.value;
  let size = 30;
  const array = [];
  for (let i = 1; i <= amount; i += 1) {
    const boxColor = getRandomHexColor();
    array.push(
      `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${boxColor}"></div>`
      );
    size += 10;
  }
  getBoxes.insertAdjacentHTML('beforeend', array.join(''));
  getAmountBoxes.value = '';  
}

function destroyBoxes() {
  getBoxes.innerHTML = '';
  getAmountBoxes.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
