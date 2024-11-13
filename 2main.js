const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list'); 



//adding submit

todoForm.addEventListener("submit", addTask);

function addTask(e){

    e.preventDefault();

    console.log('hee');
    
}