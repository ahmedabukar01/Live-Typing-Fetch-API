const liveButton = document.querySelector('.live-button');
const textButton = document.querySelector('.get-text');
const jsonData = document.querySelector('.json-data');
const apiData = document.querySelector('.api-data');
const apiPost = document.querySelector('.api-post');
const mypost = document.querySelector('.mypost')
const output = document.querySelector('.output');
const input = document.querySelector('form input');
const form = document.querySelector('form');

// adding eventlisteners
liveButton.addEventListener('click', displayLiveBtn);
textButton.addEventListener('click', textOutput);
jsonData.addEventListener('click', ourjson);
apiData.addEventListener('click',gettingApiData);
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
function liveTyping(text){
    output.textContent = text;
}

// getting text
function textOutput(){
    displayDom();

    output.style.backgroundColor = `${bgColors.textButton}`;

    getText().then(data=>{
        output.innerHTML = data;
    })
    .catch(err=>{
        output.innerHTML = `${err}`;
        output.classList.add('error');
    });

    
}
//  JSON DATA
function ourjson(){
    output.innerHTML ='';
    output.style.display="block";
    output.style.backgroundColor = `${bgColors.jsonData}`;
    removeError();
    
    getJsonData().then(data=>{
        console.log(data);
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
        displayError(err);

    })
}
// API DATA 
function gettingApiData(){
    displayDom();
    removeError();
    output.style.backgroundColor =`${bgColors.apiData}`;
    output.innerHTML = ' ';

    getApiData()
    .then(data=>{
        data.forEach(d=>{
            output.innerHTML += `
                <div class="api-post">
                    <div><span>ID</span>: ${d.id}</div>
                    <h5><span>Title</span>: ${d.title}</h5>
                    <p><span>Body</span>: ${d.body}</p>
                </div>
            `;
        });
    })
    .catch(err=>{
        displayError(err);
    })
}
// managing Dom
function displayDom(){
    input.style.display="none";
    output.style.display="block";
}
function removeError(){
    if(output.classList.contains('error')){
        output.classList.remove('error');
    }
    
}
function displayError(err){
    output.innerHTML = `${err.message,"fadlan internet kada hubi"}`;
        output.classList.add('error');
        output.style.background="crimson";
}

const bgColors = {
    liveButton: '#8a2be2',
    textButton: '#1a75ff',
    jsonData: '#00cc00',
    apiData: '#ff66ff'
}
 