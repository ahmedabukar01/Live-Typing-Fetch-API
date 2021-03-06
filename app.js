const liveButton = document.querySelector('.live-button');
const textButton = document.querySelector('.get-text');
const postForm = document.querySelector('.post-form');
const jsonData = document.querySelector('.json-data');
const apiData = document.querySelector('.api-data');
const apiPost = document.querySelector('.api-post');
const myPost = document.querySelector('.mypost')
const submitPost = document.querySelector('#submit');
const output = document.querySelector('.output');
const input = document.querySelector('.text');
const clear = document.querySelector('#clear');
const form = document.querySelector('form');

// adding eventlisteners
liveButton.addEventListener('click', displayLiveBtn);
textButton.addEventListener('click', textOutput);
jsonData.addEventListener('click', ourjson);
apiData.addEventListener('click',gettingApiData);
myPost.addEventListener('click',gettingPosts);
clear.addEventListener('click',clearForm);
postForm.addEventListener('submit',e=>{
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const body = document.querySelector('.body').value;
    displayPosts(title,body);
    
})
form.addEventListener('submit',e=>e.preventDefault());
input.addEventListener('keyup', e=>{
    let text = input.value;
    liveTyping(text);
    
});

// display live typing 
function displayLiveBtn(){
    hideDom();
    displayDom();
    output.textContent ="live typing";
    output.style.background=`${bgColors.liveButton}`;
    input.style.display="inline";

}
function liveTyping(text){
    output.textContent = text;
}

// getting text
function textOutput(){
    hideDom();
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
    hideDom();
    displayDom();
    output.style.backgroundColor = `${bgColors.jsonData}`;
    removeError();
    
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
        displayError(err);

    })
}
// API DATA 
function gettingApiData(){
    hideDom();
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
                    <p><span class="span-body">Body</span>: ${d.body}</p>
                </div>
            `;
        });
    })
    .catch(err=>{
        displayError(err);
    })
}
// posts
function gettingPosts(){
    hideDom();
    removeError();
    postForm.style.display="block";

}
function displayPosts(title,body){
    output.innerHTML += `
    <div class="post-container">
        <div class="post">
            <h2>${title}</h2>
            <p>${body}</p>
        </div>
        <i class="fa fa-trash"></i>
    </div>
    `;
    displayDom();
    postForm.reset();
}
// managing Dom
function displayDom(){
    output.style.display="block";
}
function removeError(){
    if(output.classList.contains('error')){
        output.classList.remove('error');
    }
    
}

function displayError(err,color){
    output.innerHTML = `${err.message,"fadlan internet kada hubi"}`;
        output.classList.add('error');
        output.style.background="crimson";
}
function clearForm(){
    postForm.reset();
}
function hideDom(){
    input.style.display="none";
    postForm.style.display="none";
    output.innerHTML ='';
    output.style.background="none";
    output.style.display="none";
    postForm.style.display='none';
}

const bgColors = {
    liveButton: '#8a2be2',
    textButton: '#1a75ff',
    jsonData: '#00cc00',
    apiData: '#ff66ff'
}
 
output.addEventListener('click',e=>{
    if(e.target.classList.contains('fa')){
        e.target.parentElement.remove();
    }
})