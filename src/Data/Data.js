

let dataFromBackend;

async function fetchData(){
    let data = await fetch("");
    let response = await data.json()

    dataFromBackend = data;
} 

fetchData()

export default dataFromBackend;