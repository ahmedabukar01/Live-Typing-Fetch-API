const liveButton = document.querySelector('.live-button');
const textButton = document.querySelector('.get-text');
const jsonData = document.querySelector('.json-data');
const apiData = document.querySelector('.api-data');
const apiPost = document.querySelector('.api-post');
const output = document.querySelector('.output');
const input = document.querySelector('form input');

liveButton.addEventListener('click', liveOutput);
input.addEventListener('keyup', e=>{
    let text = input.value;
    liveTyping(text);
    
});

// live typing
function liveOutput(){
    output.textContent ="here you see your typing";
    output.style.display="block";
    input.style.display="inline";
}

function liveTyping(text){
    output.textContent = text;
}
// getting text
