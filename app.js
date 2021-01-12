const liveButton = document.querySelector('.live-button');
const output = document.querySelector('.output');
const input = document.querySelector('form input');

liveButton.addEventListener('click', liveOutput);
input.addEventListener('keyup', e=>{
    let text = input.value;
    liveTyping(text);
});

function liveOutput(){
    output.textContent ="here you see your typing";
    output.style.display="block";
    input.style.display="inline";
}
// live typing
function liveTyping(text){
    output.textContent = text;
}