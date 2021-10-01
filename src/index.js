import {Todo} from "./app/todo"
import {TodoList} from "./app/todo-list"
import "./app/index.css"
import {TodoViewer} from "./app/UI/todo-viewer.js"
import {TodoInput} from "./app/UI/todo-input.js"
import { ProjectViewer } from "./app/UI/project-viewer"
import { ProjectInput } from "./app/UI/project-input"
import { TodoDetailsViewer, TodoDetailsViwerListeners } from "./app/UI/todo-details-viewer"

// const  a = new Todo("get bread", "remember to go to groceries to get bread", new Date(), "medium", "remember to do this for your own sake othewise YOU DEAD!", 
// [["go to store", false], ["get bread",  false], ["pay for bread", false]])

//local storage logic
export let projects
export let activeProject = {
    active: "default",
    get activeProject() {
        return this.active
    },
    set activeProject(val) {
        this.active = val
    }
}

if(window.localStorage.getItem("projects") !== null) {
    projects = []
    JSON.parse(window.localStorage.getItem("projects")).forEach(project => {
        let modProject = new TodoList(project.projectName)
        
        project.todos.forEach(todo => {
            let modTodo = new Todo(todo.title, todo.checked, todo.dueDate, todo.priority, todo.notes, todo.checklist, todo.project, todo.id)
            modProject.addTodo(modTodo)
        })
        projects.push(modProject)
    })

    activeProject.activeProject = window.localStorage.getItem("active")
    projects.forEach(project => {
        if (project.projectName === activeProject.activeProject) {
            project.todos.forEach(todo => TodoViewer.createTodo(todo))
        }
    })
    console.log("active project____", activeProject.activeProject)
    
} else {
    projects = [new TodoList("default")]
}




ProjectViewer.createProjectElement()
TodoDetailsViewer.createPane(new Todo("", "", "", "", "", [], "", ""))

//check which project was last active and set to green, if non set  default to green
ProjectViewer.setActiveProjectColor()
TodoInput.createInput()

const details = document.querySelector("#todo-details-pane")
details.style.visibility = "hidden"



