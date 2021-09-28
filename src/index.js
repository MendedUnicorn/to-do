import {Todo} from "./app/todo"
import {TodoList} from "./app/todo-list"
import "./app/index.css"
import {TodoViewer} from "./app/UI/todo-viewer.js"
import {TodoInput} from "./app/UI/todo-input.js"
import { ProjectViewer } from "./app/UI/project-viewer"
import { ProjectInput } from "./app/UI/project-input"

const  a = new Todo("get bread", "remember to go to groceries to get bread", new Date(), "medium", "remember to do this for your own sake othewise YOU DEAD!", 
[["go to store", false], ["get bread",  false], ["pay for bread", false]])

//local storage logic
export let projects

if(window.localStorage.getItem("projects") !== null) {
    projects = []
    JSON.parse(window.localStorage.getItem("projects")).forEach(project => {
        let modProject = new TodoList(project.projectName)
        
        project.todos.forEach(todo => {
            let modTodo = new Todo(todo.title, todo.checked, todo.dueDate, todo.priority, todo.notes, todo.checklist, todo.project)
            TodoViewer.createTodo(modTodo)
            modProject.addTodo(modTodo)
        })
        projects.push(modProject)
    })
} else {
    projects = [new TodoList("default")]
}

projects.forEach(project => {
    document.querySelector(".nav-bar").appendChild(ProjectViewer.createProjectElement(project))

})

//Create a default todolist/project
//let defaultList = new TodoList("default")

//TodoViewer.createTodo()
TodoInput.createInput()
ProjectInput.createProjectTitleInput()





