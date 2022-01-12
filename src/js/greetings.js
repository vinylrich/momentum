const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
const link = document.querySelector("a")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const KEY_USERNAME = "username"
function onLoginSubmit(event){
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem(KEY_USERNAME,username)
    paintGreetings(username)

}

function paintGreetings(username){
    greeting.innerText = "Hello"+username
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.classList.add(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(KEY_USERNAME)

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
}else{
    paintGreetings(savedUsername);
}