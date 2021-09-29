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
            const projectElement = document.createElement("div")
            const projectTitle  = document.createElement("p")
            const projectDelete = document.createElement("div")
            projectDelete.classList.add("project-delete")
            projectDelete.innerText = "X"
            projectDelete.addEventListener("click", e => {
                console.log(e.target.parentElement.firstChild.innerText)
                projects.forEach(p => console.log(p));
                projects.forEach((project, i) => {
                        if(e.target.parentElement.firstChild.innerText === project.projectName  ) {
                            this.clearProjects()
                            projects.splice(i, 1)
                            this.createProjectElement()
                            window.localStorage.setItem("projects", JSON.stringify(projects))

                            //if selected project was deleted, make next project the active one
                            //render all todos for active project
                        }
                    
                })
            })
            projectTitle.classList.add("project-title")
            projectElement.classList.add("project-element")
            projectTitle.innerText = project.projectName
            projectElement.append(projectTitle, projectDelete)
            projectTitle.addEventListener("click", e => {
                TodoViewer.clearTodos()
                activeProject.activeProject = e.target.innerText
                window.localStorage.setItem("active", activeProject.activeProject)
                let all = document.querySelectorAll(".project-title")
                all.forEach(el =>el.classList.remove("active-project"))
                e.target.classList.add("active-project")
                
                project.todos.forEach(todo => TodoViewer.createTodo(todo) )
                TodoInput.createInput()
            })
            navBar.appendChild(projectElement)
            
        })
        ProjectInput.createProjectInput()
    }
    static clearProjects = () => {
        const navBar = document.querySelector(".nav-bar")
        navBar.innerHTML = ""
        ProjectInput.createProjectInput()
    }
    static setActiveProjectColor = () => {
        let projectElements = document.querySelectorAll(".project-element")
        console.log(projectElements);
        projectElements.forEach(project=> {
            if(project.firstChild.innerText  === activeProject.activeProject){
                project.firstChild.classList.add("active-project")
            }
    })


}
    

    

}