import {formatDistance, format} from "date-fns"
import { projects } from "../.."
import { TodoDetailsViewer } from "./todo-details-viewer"
import { TodoInput } from "./todo-input"
import { activeProject } from "../.."


export class TodoViewer {
    constructor() {

    }
    static createTodo = (todo) => {
        const todoList = document.querySelector(".to-do-list")
        const todoElement = document.createElement("div")
        todoElement.classList.add("todo")
        todoElement.id = todo.id
        todoElement.append(this.createMarkedElement(todo, todoElement) , this.createTitle(todo), this.createDueDate(todo), this.createPrioriy(todo) )
        todoList.prepend(todoElement)
        todoElement.addEventListener("click", e => {
             
            this.setActiveTodo(todo, e.currentTarget)
        })
        todoElement.appendChild(this.createDeleteBtn())
        if (todo.checked) {todoElement.classList.add("checked") } else {todoElement.classList.remove("checked")}
        if(todo.checked) {todoElement.firstChild.firstChild.checked = true}

    }
    static deleteTodo = () => {

    }
    static clearTodos = () => {
        const todoList = document.querySelector(".to-do-list")
        todoList.innerHTML = ""
    }
    static updateTodos = () => {
        projects.forEach(project => {
            console.log(project)
            if (project.projectName === activeProject.activeProject) {
                project.todos.forEach(todo => {
                    this.createTodo(todo)
                    document.querySelectorAll(".todo").forEach(todoElement => {
                        if (todoElement.id == todo.id) {
                            if (todo.checked) {todoElement.classList.add("checked") } else {todoElement.classList.remove("checked")}
                            if(todo.checked) {todoElement.firstChild.firstChild.checked = true}
                            console.log("todo: ", todoElement)
                        }
                    })
                    
                })
            }
        }) 
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
        let d = todo.dueDate
        let date = d.substr(8,2)
        let month = (d.substr(5,2) - 1 ) < 10 ? "0" + (d.substr(5,2) - 1 ).toString() : d.substr(5,2) - 1 
        let year = d.substr(0, 4)
        const dueDate  = new Date(year, month ,date )
        todoDueDate.innerText = todo.dueDate ? formatDistance(dueDate, new Date(format(Date.now(), "yyyy,MM,dd")), {addSuffix: true}) : ""
        return todoDueDate
    }
    static createPrioriy = (todo) => {
        const todoPriority = document.createElement("div")
        todoPriority.classList = "priority"
        todoPriority.classList.add(todo.priority === "high" ? "high" : todo.priority === "medium" ? "medium" : "low")
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
    static setActiveTodo = (todo, todoDiv) => {
        TodoDetailsViewer.deletePane()
        TodoDetailsViewer.createPane(todo)
        const allTodos = document.querySelectorAll(".todo")
        allTodos.forEach(todo => { 
            todo.classList.remove("active")
        })
        todoDiv.classList.add("active")
    }
    static createMarkedElement = (todo, todoElement) => {
        const label = document.createElement("label")
        label.classList.add("checkbox-container")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const span = document.createElement("span")
        span.classList.add("checkmark")
        label.append(checkbox, span)
        //this.setCheckedClass(todo, todoElement)

        span.addEventListener("click", e => {
            todo.checked = !todo.checked
            window.localStorage.setItem("projects", JSON.stringify(projects))
            console.log(todo, "todo is now:", todo.checked)
            let todoDiv = e.target.parentElement.parentElement
            if (todo.checked) {todoDiv.classList.add("checked") } else {todoDiv.classList.remove("checked")}
            
        })

        return label
    }
    // static setCheckedClass = (todo, todoElementTarget) => {
    //     if (todo.checked) {todoElementTarget.classList.add("checked")} else { todoElementTarget.classList.remove("checked")}
    //     //const todoCheckmarkElement = document.querySelector(".checkbox-container input")
    //     if (todo.checked) { todoCheckmarkElement.checked = true}  
    // }


}



//title, description, dueDate, priority, notes, checklist, project