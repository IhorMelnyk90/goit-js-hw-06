const input = document.querySelector("#validation-input");
input.addEventListener('blur', quantityCheck);

function quantityCheck(){
    Number(input.dataset.length) === input.value.trim().length
    ? input.setAttribute('class', 'valid')
    : input.setAttribute('class', 'invalid');
}