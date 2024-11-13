const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list'); 



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
     }
    
    
} 