const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id","todo-box");
  const label = document.createElement("label");
  label.innerText = newTodo.text;
  label.setAttribute("for", "todo-box");
  const button = document.createElement("button");
  button.innerText = "🗑";
  button.addEventListener("click", deleteToDo);
  li.appendChild(form);
  form.appendChild(input);
  form.appendChild(label);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const toDoBtn = document.querySelector("#todo_btn");
const hiddenBox = document.querySelector("#hidden-box");
const toDoH1 = document.querySelector(".todo-text h1");

function toDoBtnClickHandler (){
  hiddenBox.classList.remove("hidden");
  toDoBtn.classList.add("hidden");
}

toDoBtn.addEventListener("click", toDoBtnClickHandler);

function toDoH1ClickHandler (){
  hiddenBox.classList.add("hidden");
  toDoBtn.classList.remove("hidden");
}

toDoH1.addEventListener("click", toDoH1ClickHandler);