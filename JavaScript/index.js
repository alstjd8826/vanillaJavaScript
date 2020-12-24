/*console.log('Im Working. Im JS. Im Beautiful. Im Worth it');

a= 221;
b=a-5;
console.log(b);*/
// 주석
/* 주석
주석
주석
주석
주석
주석*/
/*
const what = "misnung";// 변수 선언 시 기본은 const
console.log(what);
*/

/*
boolean
const wat = true;
*/

/*
Number
const wat = 666;
*/

/*float
const wat = 55.1;
console.log(wat);
*/
/*
const msinfo = ["Minsung", "25", "Changwon", true];
console.log(msinfo);
*/

//object
// const msinfo = {
//     name:"Minsung",
//     age:25,
//     gender : "male",
//     ishandsome:true,
//     favMovies:["along the gods", "Old boy"],
//     favFood: [
//         {name:"hamburger", fatty : true}, 
//         {name:"noodle", fatty: true}
//     ]
// };
// console.log(console);

// function sayHello(x,y){
//     console.log('Hello!',x,'you have',y, 'years of age.');
// }
// sayHello("Jun",25);

// function sayHello(x,y){
//     return `Hello ${x} you are ${y} years old`;
// }
// const greet = sayHello("Jun",25);

// console.log(greet);


/* calculator
const calc = {
    plus: function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multi:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    },
    power:function(a,b){
        return a**b;
    }
}

const plus = calc.plus(2, 4)
console.log(plus)
const minus = calc.minus(2, 4)
console.log(minus)
const multi = calc.multi(2, 4)
console.log(multi)
const div = calc.div(2, 4)
console.log(div)
const power = calc.power(2, 4)
console.log(power)
*/
// title.innerHTML = "Hi! From JS";
// title.style.color = 'red';
// console.dir(title);
// document.title = 'ahahahh'

// document.querySelector("#title");

// function handleResize(event){
//     console.log(event);
//     console.log("i have been resized")
// }

// window.addEventListener("resize", handleResize);

// function handleClick(){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleClick);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
// const hasclass = title.classlist.toggle(CLICKED_CLASS); 와 같다.

function init(){
    title.addEventListener("click", handleClick);
}

init();

// const BASE_COLOR = "red";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

//  function init(){
//      title.addEventListener("clicked", handleClick);
//  }

//  init();

// function handleOffline(){
//     console.log("dasd");
// }

// function handleOnline(){
//     console.log("dasd");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);
