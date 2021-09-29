import { lightFormat } from "date-fns"

export class TodoDetailsViewer {
    static createPane = (todo) => {
        if (!todo) return 
        let title = todo.title
        let dueDate = todo.dueDate
        let priority = todo.priority
        let notes = todo.notes
        let checklist = todo.checklist

        const container = document.querySelector(".container")
        const pane = document.createElement("div")
        
        const dueDateElement = document.createElement("p")
        const priorityElement = document.createElement("div")
        const notesElement = document.createElement("p")
        const checklistElement = document.createElement("ul")

        
        const dueDateTitle = document.createElement("p")
        dueDateTitle.innerText = "Due Date:"
        const priorityTitle = document.createElement("p")
        priorityTitle.innetText = "Priority:"
        const notesTitle = document.createElement("p")
        notesTitle.innerText = "Notes:"
        const checklistTitle = document.createElement("p")
        checklistTitle.innerText = "Checklist:"
        
        pane.id = "todo-details-pane"
        
        dueDateElement.classList.add("pane-dude-date")
        priorityElement.classList.add("pane-priority")
        notesElement.classList.add("pane-notes")
        checklistElement.classList.add("pane-checklist")

        
        dueDateElement.innerText = dueDate
        priorityElement.innerText = priority
        notesElement.innerText = notes
        
        checklist.forEach(el => {
            let check = document.createElement("li")
            check.classList.add("checklist-element")
            check.innerText = el
            checklistElement.appendChild(check)
        });
        pane.append(this.createTodoPane(title), this.createDueDatePane(dueDate), priorityTitle, priorityElement, notesTitle, notesElement, checklistTitle, checklistElement)
        container.appendChild(pane)

    }
    static createTodoPane = (title) => {
        const titleTitle = document.createElement("p")
        titleTitle.innerText  = "Todo:"
        const titleElement = document.createElement("input")
        titleElement.classList.add("pane-title")
        titleElement.type = "text"
        titleElement.value = title
        let packingDiv = document.createElement("div")
        packingDiv.classList.add("title-div-pane")
        packingDiv.append(titleTitle, titleElement)
        return packingDiv
    }
    static createDueDatePane = (dueDate) => {
        const dueDateTitle = document.createElement("p")
        dueDateTitle.innerText  = "Todo:"
        const dueDateElement = document.createElement("input")
        dueDateElement.classList.add("pane-title")
        dueDateElement.type = "date"
        console.log(dueDate)
        dueDateElement.value = dueDate
        let packingDiv = document.createElement("div")
        packingDiv.classList.add("due-date-div-pane")
        packingDiv.append(dueDateTitle, dueDateElement)
        return packingDiv
    }

    static deletePane = () => {
        document.querySelector("#todo-details-pane").remove()
    }
    static togglePaneVisibility = () => {
        document.querySelector("#todo-details-pane").classList.toggle("visible")
    }
}