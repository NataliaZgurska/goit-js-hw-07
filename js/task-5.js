const btnColor = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color')

btnColor.addEventListener('click', onButtonClick);


function onButtonClick() {
  const bgColor = getRandomHexColor();
  bodyElem.style.backgroundColor = bgColor;
  spanElem.textContent = `${bgColor}`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



  



