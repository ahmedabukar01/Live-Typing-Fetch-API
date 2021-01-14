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
jsonData.addEventListener('click', ourjson);
form.addEventListener('submit',e=>e.preventDefault());
input.addEventListener('keyup', e=>{
    let text = input.value;
    liveTyping(text);
    
});

// display live typing 
function displayLiveBtn(){
    output.textContent ="live typing";
    output.style.background=`${bgColors.liveButton}`;
    output.style.display="block";
    input.style.display="inline";

}
// live typing
function liveTyping(text){
    output.textContent = text;
}
// getting text
function textOutput(){
    displayDom();

    output.style.backgroundColor = `${bgColors.textButton}`;

    // calling text fun

    getText().then(data=>{
        output.innerHTML = data;
    })
    .catch(err=>{
        output.innerHTML = `${err}`;
        output.classList.add('error');
    });

    
}
// json data
function ourjson(){
    output.innerHTML ='';
    output.style.display="block";
    removeError();
    
    // calling json function
    
    getJsonData().then(data=>{
        data.forEach(d=>{
            output.innerHTML += `
           <ul>
                <li>id: ${d.id}</li>
                <li>Title: ${d.title}</li>
                <li>Completed: ${d.completed}</li>
           </ul>
        `
        })
    }).catch(err=>{
        output.innerHTML = `${err.message}`;
        output.style.display="block";
        output.classList.add('error');

    })
}
// display and disappear
function displayDom(){
    input.style.display="none";
    output.style.display="block";
}
function removeError(){
    if(output.classList.contains('error')){
        output.classList.remove('error');
    }
    
}

// background colors
const bgColors = {
    liveButton: '#8a2be2',
    textButton: '#1a75ff',
    jsonData: '#00cc00'
}
 