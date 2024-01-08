const ulElem = document.querySelector('#categories');
const liElems = ulElem.querySelectorAll('.item')
console.log('Number of categories:', liElems.length);

liElems.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
       console.log('Elements:', element.lastElementChild.children.length);
})


