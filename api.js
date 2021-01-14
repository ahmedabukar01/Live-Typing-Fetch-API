// getting text 
const getText = async () =>{
    const response = await fetch('textFile.txt');
    const data = await response.text();
    return data;
}
// getting json data
function  getJsonData(){
    const response = fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response=>{
                        console.log(response);
                        return response.json();
                    }).then(data=>data)
                    .catch(err=>{
                        output.innerHTML = err;
                        output.classList += " error";
                        displayDom();
                    });
}