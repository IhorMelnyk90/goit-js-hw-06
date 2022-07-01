const fontSizeEl = document.querySelector("#font-size-control");
const changeSizeText = document.querySelector("#text");

fontSizeEl.addEventListener('input', runner);

function runner (){
    const fontSizeVel = fontSizeEl.value;
    changeSizeText.style.fontSize = `${fontSizeVel}px`;
}