import { projects } from "../.."
import { ProjectInput } from "./project-input"
import {activeProject} from "../../index"
import { TodoViewer } from "./todo-viewer"
import { TodoInput } from "./todo-input"

export class ProjectViewer {
    static createProjectElement = () => {
        const navBar = document.querySelector(".nav-bar")
        navBar.innerHTML = ""
        projects.forEach(project => {
            const projectElement = document.createElement("p")
            projectElement.classList.add("project-element")
            projectElement.innerText = project.projectName
            projectElement.addEventListener("click", e => {
                TodoViewer.clearTodos()
                //console.log("acitve from inside project viewer BEFORE", Storage.activeProject);
                activeProject.activeProject = e.target.innerText
                window.localStorage.setItem("active", activeProject.activeProject)
                //console.log("acitve from inside project viewer", Storage.activeProject);
                let all = document.querySelectorAll(".project-element")
                all.forEach(el =>el.classList.remove("active-project"))
                e.target.classList.add("active-project")
                
                project.todos.forEach(todo => TodoViewer.createTodo(todo) )
                TodoInput.createInput()
            })
            navBar.appendChild(projectElement)
            
        })
        ProjectInput.createProjectInput()
    }
}