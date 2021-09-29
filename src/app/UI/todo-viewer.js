import {format} from "date-fns"
import { projects } from "../.."
import { TodoDetailsViewer } from "./todo-details-viewer"
import { TodoInput } from "./todo-input"


export class TodoViewer {
    constructor() {

    }
    static createTodo = (todo) => {
        const todoList = document.querySelector(".to-do-list")
        const todoElement = document.createElement("div")
        todoElement.classList.add("todo")
        todoElement.id = todo.id
        //todoElement.classList.add(todo.priority === "high" ? "high" : todo.priority === "medium" ? "medium" : "low")
        todoElement.append(this.createTitle(todo), this.createDueDate(todo), this.createPrioriy(todo), this.createNotes(todo), this.createChecklist(todo) )
        todoList.prepend(todoElement)
        todoElement.addEventListener("click", e => {
             console.log(e.currentTarget)
             TodoDetailsViewer.deletePane()
             TodoDetailsViewer.createPane(todo)
        })
        todoElement.appendChild(this.createDeleteBtn())

    }
    static deleteTodo = () => {

    }
    static clearTodos = () => {
        const todoList = document.querySelector(".to-do-list")
        todoList.innerHTML = ""
    }

    static createTitle = (todo) => {
        const todoTitle = document.createElement("p")
        todoTitle.classList = "title"
        todoTitle.innerText = todo.title
        return todoTitle
    }
    static createDueDate = (todo) => {
        const todoDueDate = document.createElement("p")
        todoDueDate.classList = "dueDate"
        todoDueDate.innerText = todo.dueDate //format(todo.dueDate, "dd-MM-yyyy")
        return todoDueDate
    }
    static createPrioriy = (todo) => {
        const todoPriority = document.createElement("div")
        todoPriority.classList = "priority"
        todoPriority.classList.add(todo.priority === "high" ? "high" : todo.priority === "medium" ? "medium" : "low")
        //todoPriority.innerText = todo.priority
        return todoPriority
    }
    static createNotes = (todo) => {
        const todoNotes = document.createElement("p")
        todoNotes.classList = "notes"
        todoNotes.innerText = todo.notes 
        return todoNotes
    }
    static createChecklist= (todo) => {
        const ul = document.createElement("ul")
        if (todo.checklist.length > 0) {
            todo.checklist.forEach(item => {
                let li = document.createElement("li")
                li.innerText = item[0]
                ul.appendChild(li)
                if(item[1]) li.classList.add("checked")
                
            })
        }
        return ul;
        
    }
    static createDeleteBtn = () => {
        const deleteBtn = document.createElement("div")
        deleteBtn.innerText = "X"
        deleteBtn.classList.add("delete-btn")
        deleteBtn.addEventListener("click", e => {
            //console.log(e.target)
            e.stopPropagation()
            projects.forEach((project, i) => {
                project.todos.forEach((todo, j) => {
                    if(e.target.parentElement.id === todo.id  ) {
                        projects[i].todos.splice(j, 1)
                        this.clearTodos()
                        projects[i].todos.forEach(todo => {
                            this.createTodo(todo)
                        })
                        TodoInput.createInput()

                    }
                })
            })
            window.localStorage.setItem("projects", JSON.stringify(projects))
            
        })
        return deleteBtn
    }

}



//title, description, dueDate, priority, notes, checklist, project