// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const ulElem = document.querySelector('#categories');
const liElems = ulElem.querySelectorAll('.item')
console.log('Number of categories:', liElems.length);

liElems.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
       console.log('Elements:', element.lastElementChild.children.length);
})


