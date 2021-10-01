import { ProjectViewer } from "./project-viewer"
import { TodoList } from "../todo-list"
import { projects } from "../.."

export class ProjectInput {
        static createProjectInput () {
        const navBar = document.querySelector(".nav-bar")
        const inputBar = document.createElement("form")
        inputBar.id = "input-bar"
        const input = document.createElement("input")
        const submit = document.createElement("input")
        submit.setAttribute("type", "submit")
        submit.id = "btn-new-project"
        submit.value = "+"
        input.setAttribute("type", "text")
        inputBar.append(input, submit)
        navBar.appendChild(inputBar)
        submit.addEventListener("click", e => {
            e.preventDefault()
            if (projects.find(project =>  project.projectName === input.value)) {alert("A project with that name already exists")}
            else if (input.value.length > 0) {
                let newProject  = new TodoList(input.value.trim())
                projects.push(newProject)
                ProjectViewer.createProjectElement()
                window.localStorage.setItem("projects", JSON.stringify(projects))
            } else {
                alert("Project Name is needed")
            }
            
        })
    }
}