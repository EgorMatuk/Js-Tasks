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
    const result = await getResurces(`${WEATHER_URL}?q=${place}&appid=${APP_ID}&lang=ru`);
    return result;
}

const currentWeatherPicture = (temp) => {
    const currentWeather = document.querySelector('#weather-current');
    temp > 20 ? currentWeather.setAttribute('src', 'images/tropical.jpg') : false;
    temp > 0 && temp < 20 ? currentWeather.setAttribute('src', 'images/fall.jpg') : false;
    temp < 4 ? currentWeather.setAttribute('src', 'images/winter.jpg') : false;
}

const renderWeatherApp = async() => {
    const currentPlace = document.getElementById('place').value.trim();
    const data = await getWeatherInfo(currentPlace);
    const currentTemp = document.querySelector('#current-temp');
    const currentWind = document.querySelector('#current-wind');

    currentTemp.innerHTML = Math.round(data.main.temp - 273);
    currentWind.innerHTML = Math.ceil(data.wind.speed);
    const area = document.querySelector('.card-content');
    area.insertAdjacentHTML('beforeend', `<p>Направление ветра(градус): ${data.wind.deg}</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Максимальная температура: ${Math.round(data.main.temp_max - 273)} градусов</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Минимальная температура: ${Math.round(data.main.temp_min - 273)} градусов</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Сообщение о погоде: ${data.weather[0].description}</p>`)

    currentWeatherPicture(Math.round(data.main.temp - 273));
    console.log(data);
}
document.querySelector('#get-info').addEventListener('click', renderWeatherApp);