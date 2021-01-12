const liveButton = document.querySelector('.live-button');
const textButton = document.querySelector('.get-text');
const jsonData = document.querySelector('.json-data');
const apiData = document.querySelector('.api-data');
const apiPost = document.querySelector('.api-post');
const output = document.querySelector('.output');
const input = document.querySelector('form input');
const form = document.querySelector('form');

// adding eventlisteners
liveButton.addEventListener('click', displayLiveBtn);
textButton.addEventListener('click', textOutput);
jsonData.addEventListener('click', getJsonData);
form.addEventListener('submit',e=>e.preventDefault());
input.addEventListener('keyup', e=>{
    let text = input.value;
    liveTyping(text);
    
});

// display live typing 
function displayLiveBtn(){
    output.textContent ="live typing";
    output.style.display="block";
    input.style.display="inline";
}
// live typing
function liveTyping(text){
    output.textContent = text;
}
// getting text
function textOutput(){
    getText().then(data=>{
        output.innerHTML = data;
    })
    .catch(err=>console.log(err));

    displayDom();
}
// json data
function  getJsonData(){
    const response = fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response=>{
                        console.log(response);
                        return response.json();
                    })
                    .then(data=>{
                        
                    })
}
// display and disappear
function displayDom(){
    input.style.display="none";
    output.style.display="block";
}
 