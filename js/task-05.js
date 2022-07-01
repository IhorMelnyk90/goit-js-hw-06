const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', addName);

function addName(){
    spanEl.textContent = inputEl.value;
   if (inputEl.value.trim() === ''){
    spanEl.textContent = "Anonymous";
   }
};