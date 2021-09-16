const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);        // save to localStorage
}

function handleSubmit(event) {
    event.preventDefault(); // 이벤트의 기본 동작 막기, enter 눌러도 텍스트 사라지지 않는다. enter을 눌르면 텍스트가 사라지는게 web의 기본 동작이므로.
    
    const currentValue = input.value;
    console.log(currentValue);

    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) { 
        // he is not in localStorage
        askForName();
    } else {
        // he is in localStorage
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
