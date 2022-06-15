//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://pro.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

const APP_ID = '6d89fc5c41786a00d4d546206d6b5d74';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

const getResurces = async(url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (error) {
        throw new Error(`Error: ${error.status}`);
    }
}


//-------------------------GET_INFO-----------------------------------
const getWeatherInfo = async(place = 'Minsk') => {
    return await getResurces(`${WEATHER_URL}?q=${place}&appid=${APP_ID}&lang=ru`);
}

const getDaysInfo = async(place = 'Minsk') => {
    return await getResurces(`${FORECAST_URL}?q=${place}&appid=${APP_ID}&lang=ru`)
}

//-----------------------PICTURES--------------------------------------
const currentWeatherPicture = (temp) => {
    const currentWeather = document.querySelector('#weather-current');
    temp > 20 ? currentWeather.setAttribute('src', 'images/tropical.jpg') : false;
    temp > 0 && temp < 20 ? currentWeather.setAttribute('src', 'images/fall.jpg') : false;
    temp < 4 ? currentWeather.setAttribute('src', 'images/winter.jpg') : false;
}
const weatherIcon = (info) => {
    let url = './images/weatherGifs/icons8-лето.gif';
    info == 'Clouds'? url = './images/weatherGifs/icons8-частичная-облачность.gif' : false;
    info == 'Rain'? url = './images/weatherGifs/icons8-сильный-дождь.gif' : false;
    return url;
}



//-------------------------RENDER WEATHER AND LIST------------------------------------
const renderWeatherApp = async() => {
    const currentPlace = document.getElementById('place').value.trim();
    const weatherList = document.querySelector('.with-header');
    const wdata = await getWeatherInfo(currentPlace);
    const ddata = await getDaysInfo(currentPlace);
    console.log(ddata.list);
    weatherList.innerHTML = ' ';
    ddata.list.forEach(element => {
        weatherList.insertAdjacentHTML('beforeend', `
        <li class="collection-item">
            <img class="icon-weather" src="${weatherIcon(element.weather[0].main)}">
            <div>
                ${new Date(element.dt_txt).toString('HH:mm')}
                <a href="#!" class="secondary-content">
                    <i class="material-icons">${Math.round(element.main.temp -273)}°C</i>
                </a>
            </div>
        </li>`);
        new Date(element.dt_txt).getHours() == "00"? weatherList.insertAdjacentHTML('beforeend',`<li class="collection-item new-day">${new Date(element.dt_txt).toString('MMMM d')}</li>`) : false;
    });

    const area = document.querySelector('.card-content');
    area.innerHTML = ' ';
    area.insertAdjacentHTML('beforeend', `<p>Температура: ${Math.round(wdata.main.temp - 273)}градусов</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Скорость ветра: ${Math.ceil(wdata.wind.speed)} м/c</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Направление ветра(градус): ${wdata.wind.deg}</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Максимальная температура: ${Math.round(wdata.main.temp_max - 273)} градусов</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Минимальная температура: ${Math.round(wdata.main.temp_min - 273)} градусов</p>`);
    area.insertAdjacentHTML('beforeend', `<p>Сообщение о погоде: ${wdata.weather[0].description}</p>`)

    currentWeatherPicture(Math.round(wdata.main.temp - 273));

}
document.querySelector('#get-info').addEventListener('click', renderWeatherApp);