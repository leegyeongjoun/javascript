const COORDS = 'coords';

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
    }
}

function init() {
    loadCoords();
}

init();
