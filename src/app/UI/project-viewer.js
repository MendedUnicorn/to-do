export class ProjectViewer {
    static createProjectElement = (project) => {
        const navBar = document.querySelector(".nav-bar")

        const projectElement = document.createElement("p")
        projectElement.innerText = project.projectName
        projectElement.addEventListener("click", e => {
            console.log("project: ",project)
        })
        return projectElement
    }
}