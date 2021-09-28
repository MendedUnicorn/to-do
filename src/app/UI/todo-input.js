//create the input form
import {Todo} from "../todo.js"
import {TodoViewer} from "./todo-viewer.js"
import {todoList} from "../todo-list"

export class TodoInput {
    constructor() {
    
    
    
    }
    static createNewTodoButton = () => {
        const newTodoButton = document.createElement("button")
        newTodoButton.innerText = "+"
        
        return newTodoButton
    }
    
    static createTitleInput = () => {
        const title = document.createElement("input")
        title.setAttribute("type", "text")
        title.id = "title-input"
        return title
    }
    static createDueDateInput = () => {
        const dueDate = document.createElement("input")
        dueDate.setAttribute("type", "date")
        dueDate.id = "due-date-input"
        return  dueDate
    }
    static createPriorityInput = () => {
        //const label = document.createElement("label")
        //label.innerText = ""
        const select = document.createElement("select")
        select.id = "priority-input"
        const high = document.createElement("option")
        high.setAttribute("value", "high")
        high.innerText = "High"
        const medium = document.createElement("option")
        medium.setAttribute("value", "medium")
        medium.innerText = "Medium"
        const low = document.createElement("option")
        low.setAttribute("value", "low")
        low.innerText  = "Low"
        select.append(high, medium, low)
        return select
    }
    // createNotesInput = () => {

    // }

    static createInput = () => {
        
        const todoList = document.querySelector(".to-do-list")
        const form = document.createElement("form")
        form.classList.add("form")
        console.log("lol");
        form.append(this.createNewTodoButton(), this.createTitleInput(), this.createDueDateInput(), this.createPriorityInput())
        todoList.appendChild(form)
    }
}

