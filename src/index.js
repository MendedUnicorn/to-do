import {Todo} from "./app/todo"
import {TodoList} from "./app/todo-list"
import "./app/index.css"
import {TodoViewer} from "./app/UI/todo-viewer.js"
import {TodoInput} from "./app/UI/todo-input.js"

const  a = new Todo("get bread", "remember to go to groceries to get bread", new Date(), "medium", "remember to do this for your own sake othewise YOU DEAD!", 
[["go to store", false], ["get bread",  false], ["pay for bread", false]])

let todos = []

TodoInput.createInput()

let newTodoButton = document.querySelector("button")
newTodoButton.addEventListener("click", (e) => {
    e.preventDefault()
    let title = document.querySelector("#title-input").value
    let dueDate = document.querySelector("#due-date-input").value
    console.log(dueDate)
    let priority = document.querySelector("#priority-input").value
    let todo = new Todo(title, "", dueDate, priority, "", "", "" )
    TodoViewer.createTodo(todo)
    

})


let defaultList = new TodoList("default")