//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const APP_ID = '6d89fc5c41786a00d4d546206d6b5d74';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

const getResurces = async(url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (error) {
        throw new Error(`Error: ${error.status}`);
    }
}

const getWeatherInfo = async(place = 'Minsk') => {
    const result = await getResurces(`${WEATHER_URL}?q=${place}&appid=${APP_ID}`);
    return result;
}

const renderWeatherApp = async() => {
    const currentPlace = document.getElementById('place').value.trim();
    const data = await getWeatherInfo(currentPlace);
    const currentTemp = document.querySelector('#current-temp');
    const currentWind = document.querySelector('#current-wind');

    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    currentWind.innerHTML = Math.ceil(data.wind.speed);
}
document.querySelector('#get-info').addEventListener('click', renderWeatherApp);