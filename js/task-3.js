const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputHandle);

let userName;

function onInputHandle() {
  userName = `${inputName.value}`;

if (userName.trim() == '') {
  userName = 'Anonymous';
}
      
  outputName.innerHTML = userName.trim();  
}