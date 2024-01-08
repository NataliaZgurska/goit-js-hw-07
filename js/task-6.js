const box = document.querySelector('#boxes');
const inputElem = document.querySelector('#controls')
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');

buttonCreate.addEventListener('click', onButtonCreateClick)
buttonDestroy.addEventListener('click', onButtonDestroyClick)

let inputValue;
let amount;
let boxArray;

function onButtonCreateClick() {
  inputValue = Number(inputElem.firstElementChild.value);

if (inputValue >= 1 && inputValue <= 100) {
  amount = inputValue;
} else {
  if (inputValue > 100) {
    amount = 0;
  } 
}
  createBoxes(amount);
  box.innerHTML = boxArray.join(' '); 
  inputElem.firstElementChild.value = '';
}


function onButtonDestroyClick() {
  box.innerHTML = '';
}

function createBoxes(amount) {
  boxArray = [];
  let boxWidth = 20;
  let boxHeight = 20;
  let bgColor;
 for (let index = 0; index < amount; index++) {
   boxWidth += 10;
   boxHeight += 10;
   bgColor = getRandomHexColor();
   const boxElem =  `<div style="width: ${boxWidth}px; height: ${boxHeight}px; background-color: ${bgColor};"></div>`
   boxArray.push(boxElem);
 }
  return boxArray;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
