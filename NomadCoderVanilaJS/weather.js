const weather = document.querySelector(".js-weather");

const API_KEY = "ceb4ed86b1e58993b91b3922bda14869";     // from https://home.openweathermap.org/api_keys
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
    .then(function(response) { // fetch를 완료하고 then 수행해라
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temp}˚ at ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        /*latitude: latitude,
        longitude: longitude*/
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoFailed() {
    console.log('Cant get geo location!!');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailed);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null) {
        askForCoords();
    } else {
        // getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        // console.log(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);

    }
}

function init() {
    loadCoords();
}

init();
