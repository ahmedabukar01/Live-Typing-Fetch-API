const getText = async () =>{
    const response = await fetch('textFile.txt');
    const data = await response.text();
    return data;

}
