import regeneratorRuntime from "regenerator-runtime";


const MESSAGES_URL = 'https://jmessages.herokuapp.com/api/message';

const getResource = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}

const postResource = async (url, sendData) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(sendData)
    }

    const res = await fetch(url, options);

    if(!res.ok){
        throw new Error(`Error code/////// ${res.status}`);
    }

    return res.json();
}




