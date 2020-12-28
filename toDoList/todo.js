const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo){
    return toDo.id === 1
}

let toDos = [];

let idNumbers = 1;

function deleteToDo(event){
    //console.log(event.target.parentNode); // 마우스로 x 클릭했을때 동작 잘하는지 콘솔로그로 알아본다.
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}
//JSON.stringify(toDos) : 자바스크립트는 값을 string으로만 받기 때문에 이를 활용해서 값을 문자열로 바꿔준다.
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumbers;
    idNumbers +=1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj); // todos 안에 todoobj의 id,text를 넣는다.
    saveToDos(); 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // enter 치면 submit 느낌으로 input 한 내용을 공백으로 만들어줌.
}


function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        //console.log(loadToDos); : 값이 문자열이라서 다시 object 값으로 바꾸어 줘야한다.
        const parsedToDos = JSON.parse(loadToDos); // string 을 object로 바꾸어 준다.
        //console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){//array에 담겨있는 것들을 각각 한번씩 함수를 실행시켜준다.
            //console.log(toDo.text); // toDo.text 를 나타낸다. 확인용으로 사용
            paintToDo(toDo.text);//콘솔 말고 화면에 출력해준다.
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

    init();