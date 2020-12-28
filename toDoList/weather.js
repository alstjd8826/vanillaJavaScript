
const weather = document.querySelector(".js-weather");
const API_KEY = "4c328c26bba01a4c29e0d2ed2bc4adf1";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(responce){
        return responce.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

//위도 경도를 localstorage 에 저장
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
};

//좌표를 가져오는데 성공했을 때 함수
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

//좌표를 가져오는데 실패했을 때 함수
function handleGeoError(){
    console.log("Cant access geo location");
}

//위치정보를 읽어오는 함수 공식
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

//localstorage에 좌표가 있을 때와 없을 때 조건 함수
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords(); // 좌표를 불러오는 함수
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
        //get weather
    }
}

function init(){
    loadCoords();
}

init();