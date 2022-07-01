const decrementButEl = document.querySelector('button[data-action="decrement"]');
const incrementButEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementButEl.addEventListener('click', onDecrementEvent);
incrementButEl.addEventListener('click', onIncrementEvent);


function onDecrementEvent(){
    counterValue.textContent = Number(counterValue.textContent)-1;
}

function onIncrementEvent(){
    counterValue.textContent = Number(counterValue.textContent)+1;
}