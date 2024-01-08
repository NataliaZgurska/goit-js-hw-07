// Є input, у який користувач вводить бажану кількість елементів. 

// Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів 
// і очищатися значення в інпуті.

// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.

// Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
// Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), 
// яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount і додавати їх у DOM 
// дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

const box = document.querySelector('#boxes');

const inputElem = document.querySelector('#controls')
inputElem.firstElementChild.addEventListener('input', onInputClick);

let inputValue;
let boxArray;

function onInputClick() {
  inputValue = Number(inputElem.firstElementChild.value);
   createBoxes(inputValue);
  box.innerHTML = boxArray.join(' ');
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

// createBoxes(5);
// box.innerHTML = boxArray.join(' ');




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
