const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputHandle);

function onInputHandle() {
  let userName = inputName.value.trim();

  if (userName == '') {
    userName = 'Anonymous';
  }
  
  outputName.textContent = userName;  
}