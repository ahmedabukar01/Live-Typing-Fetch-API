// getting text 
const getText = async () =>{
    const response = await fetch('textFile.txt');
    const data = await response.text();
    return data;
}
// getting json data

    const getJsonData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = response.json();
        return data;
    }
