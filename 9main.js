const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list'); 



document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks(){

   //getting old tasks form localStorage
   
   const tasks = getTasksFormLocalStorage();

   tasks.forEach(task => {
     addTaskToDOM(task)    
   })
   
}

//adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e){

    e.preventDefault();

    const taskText =  todoInput.value.trim();  //trim sibiska kasaaraa

    // console.log(new Date(Date.now()))
    // console.log(new Date(Date.now()).getFullYear()) // triikhda mar kaas lajoogo ku sinaa
    // console.log(new Date(Date.now()).getHours())

     if(taskText !== ""){

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false  
        }
        // adding to the dom
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);    

        todoInput.value = ""; //todoInput waxa ku jira marka wax lagu qoro firaaqeey
     }
    
    
} 

function addTaskToDOM(task) {


    const li = document.createElement("li");
    li.className = `todo-item ${task.completed ? "completed" : "" }`;
    li.dataset.id = task.id;

    li.innerHTML = ` 
     <input type="checkbox" class="complate-checkbox">
        <span class="task">${task.text}</span>
            <button class="edit-btn">Edit</button> 
            <button class="delete-btn">Delete</button>`

            todoList.appendChild(li); // appendChild waxa weeye wixi hore hesatay ku dawaqabo
}


function saveTaskToLocalStorage(task){


    const oldTasks =getTasksFormLocalStorage();

    oldTasks.push(task)// ku wiii hore lagudray ku wii cusbaay

    
 localStorage.setItem("tasks", JSON.stringify(oldTasks))
}

function getTasksFormLocalStorage(){

    const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    return oldTasks
}
