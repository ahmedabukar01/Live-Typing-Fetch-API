// getting text 
const getText = async () =>{
    const response = await fetch('textFile.txt');
    const data = await response.text();
    return data;
}
// getting json data

    const getJsonData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
    }
// getting API Data
const getApiData = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}