const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
     SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault(); // event기본값을 막는다. 여기서는 textbox에 엔터를 치면 입력값이 지워졌는데 textbox에 남아있게 만든다 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); // class이름을 임의로 추가
    greeting.innerText = `Hello ${text}`;
}


// localStorage 값 가져오기
function loadName(){
   const currentUser = localStorage.getItem(USER_LS);
   if(currentUser === null){
    //user is none
    askForName();
   } else{
    //user is 
    paintGreeting(currentUser);
   }
}


function init(){
    loadName();
}
init();
