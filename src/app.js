const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
const body = document.querySelector("body")
const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden")
}
function handleLinkClick(event){
    event.preventDefault()
    alert("clicked")
}
function handleBodyEvent(){
    loginForm.className=""
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);
body.addEventListener("click",handleBodyEvent)