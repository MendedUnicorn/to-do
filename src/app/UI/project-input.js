export class ProjectInput {
    
    static createInputSubmittButton () {

    }
    static createProjectTitleInput () {
        const navBar = document.querySelector(".nav-bar")
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        navBar.appendChild(input)
    }
}