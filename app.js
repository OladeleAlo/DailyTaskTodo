// Selectors
todoInput = document.querySelector(".todo-input");
todoList = document.querySelector(".todo-list");
todoButton = document.querySelector(".todo-button");

// Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck)


// Functions
function addTodo(event){
    event.preventDefault();

    // creating the div inside the Ul
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // creating mark icon

    const completebtn = document.createElement("button");
    completebtn.classList.add("complete-btn");
    completebtn.innerHTML = `<i class = "fas fa-check"></i>`;
    todoDiv.appendChild(completebtn);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = " ";

}

function deleteCheck(e){
    if(e.target.classList[0]=== "trash-btn"){
        const todo = e.target.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",()=>{
            todo.remove();
        });

    }
    if(e.target.classList[0]=== "complete-btn"){
        const todo = e.target.parentElement;
        todo.classList.toggle("complete");
    }
}