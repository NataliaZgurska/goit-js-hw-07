// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const elem = document.querySelector('#categories');
const elemArray = (...elem);
const numberOfCategories = elemArray.length;

console.log(elem);
console.log(elemArray);
console.log(numberOfCategories);