const clockContainer = document.querySelector(".js-clock"); //document의 js-clock이라는 클래스를 갖고온다.
const clockTitle = clockContainer.querySelector("h1");// clockContainer의 h1 태그를 가지고 온다.

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
        seconds < 10 ? `0${seconds}` : `${seconds}`
    }`; // if 문 10보다 작으면 초앞에 0 아니면 그대로 내보낸다.

}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();