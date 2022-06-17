const UNVR_API = "http://universities.hipolabs.com/search";

const getResource = async(url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}

const getUniversList = async(country = "Belarus") =>{
    const data = await getResource(`${UNVR_API}?country=${country}`);
    console.log(data);
    return data;
}