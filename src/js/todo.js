const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];
function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id=newTodoObj.id
    const span = document.createElement("span");
    span.innerText=newTodoObj.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos=todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodos()
}
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
}
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj)
    paintTodo(newTodoObj);
    saveTodos(todos)
}

todoForm.addEventListener("submit",handleTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY)
if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    parsedTodos.forEach(paintTodo)

}
