import { lightFormat } from "date-fns"
import { activeProject, projects } from "../.."
import { TodoInput } from "./todo-input"
import { TodoViewer } from "./todo-viewer"

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
        
        // const dueDateElement = document.createElement("p")
        // const priorityElement = document.createElement("div")
        // const notesElement = document.createElement("p")
        // const checklistElement = document.createElement("ul")

        
        // const dueDateTitle = document.createElement("p")
        // dueDateTitle.innerText = "Due Date:"
        // const priorityTitle = document.createElement("p")
        // priorityTitle.innetText = "Priority:"
        // const notesTitle = document.createElement("p")
        // notesTitle.innerText = "Notes:"

        
        pane.id = "todo-details-pane"
        
        // dueDateElement.classList.add("pane-dude-date")
        // priorityElement.classList.add("pane-priority")
        // notesElement.classList.add("pane-notes")
        // checklistElement.classList.add("pane-checklist")

        
        // dueDateElement.innerText = dueDate
        // priorityElement.innerText = priority
        // notesElement.innerText = notes
        
        // checklist.forEach(el => {
        //     let check = document.createElement("li")
        //     check.classList.add("checklist-element")
        //     check.innerText = el
        //     checklistElement.appendChild(check)
        // });
        pane.append(this.createTodoPane(title), this.createDueDatePane(dueDate), this.createPriorityPane(priority), this.createNotesPane(todo), this.createChecklistPane(todo))
        container.appendChild(pane)
        TodoDetailsViwerListeners.notesListener(todo)
        TodoDetailsViwerListeners.checklistListener(todo)
        TodoDetailsViwerListeners.priorityListener(todo)
        TodoDetailsViwerListeners.dueDateListener(todo)
        TodoDetailsViwerListeners.titleListener(todo)

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
        dueDateTitle.innerText  = "Due date:"
        const dueDateElement = document.createElement("input")
        dueDateElement.classList.add("pane-due-date")
        dueDateElement.type = "date"
        dueDateElement.value = dueDate
        let packingDiv = document.createElement("div")
        packingDiv.classList.add("due-date-div-pane")
        packingDiv.append(dueDateTitle, dueDateElement)
        

        return packingDiv
    }
    static createPriorityPane = (priority) => {
        const priorityTitle = document.createElement("p")
        priorityTitle.innerText  = "Priority:"
        const priorityElement = document.createElement("select")
        priorityElement.classList.add("pane-priority")
        
        let high = document.createElement("option")
        high.value = "high"
        high.innerText = "High"
        let medium = document.createElement("option")
        medium.value = "medium"
        medium.innerText = "Medium"
        let low = document.createElement("option")
        low.value = "low"
        low.innerText = "Low"
        let packingDiv = document.createElement("div")
        packingDiv.classList.add("priority-div-pane")
        priorityElement.append(high, medium, low)
        
        const colorDiv = document.createElement("div")
        const colorAndrPriority= document.createElement("div")
        colorAndrPriority.id = "color-and-priority"
        colorDiv.classList.add((priority === "high" ? "high" : priority === "medium" ? "medium" : "low") + "-pane") 
        colorDiv.classList.add("color-div")
        priorityElement.selectedIndex = ["high", "medium", "low"].indexOf(priority)
        
        colorAndrPriority.append(colorDiv, priorityElement)
        packingDiv.append(priorityTitle, colorAndrPriority)

        return packingDiv
    }
    static createNotesPane = (todo) => {
        const notesTitle = document.createElement("p")
        notesTitle.innerText  = "Notes:"
        const notesElement = document.createElement("textarea")
        notesElement.classList.add("pane-notes")
        notesElement.rows = 4
        notesElement.cols= 20
        if (!notesElement.value) {notesElement.placeholder = "Write a note..."}
        notesElement.value = todo.notes ? todo.notes : ""
        let packingDiv = document.createElement("div")
        packingDiv.classList.add("notes-div-pane")
        packingDiv.append(notesTitle, notesElement)
        
        return packingDiv
    }
    static createChecklistPane = (todo) => {
        const checklistTitle = document.createElement("p")
        checklistTitle.id = "checklist-title"
        checklistTitle.innerText = "Checklist:"
        const ul = document.createElement("ul")
        ul.id = "checklist-ul" 
        if (todo.checklist) {
            todo.checklist.forEach(checklistElement => {
                const li =document.createElement("li")
                li.innerText = checklistElement
                ul.appendChild(li)
            }) 
        }
        const checklistForm = document.createElement("form")
        checklistForm.id = "checklist-form"
        const checklistInput = document.createElement("input")
        checklistInput.type = "text"
        const checklistAddButton = document.createElement("button")
        checklistAddButton.id = "checklist-add-button"
        checklistAddButton.innerText = "+"
        checklistForm.append(checklistInput, checklistAddButton)

        let packingDiv = document.createElement("div")
        packingDiv.classList.add("checklist-div-pane")
        packingDiv.append(checklistTitle, ul, checklistForm)  
        return packingDiv
}


    static deletePane = () => {
        let todoPane = document.querySelector("#todo-details-pane")
        if (todoPane){todoPane.remove()}
    }
    static togglePaneVisibility = () => {
        document.querySelector("#todo-details-pane").classList.toggle("visible")
    }
}

//create listners for all details view inputs. 
//for notes, find a way to write to the specific todo whem chamgeomg note input
export class TodoDetailsViwerListeners {
    static notesListener = (todo) => {
        const notesElement = document.querySelector(".pane-notes")
        notesElement.addEventListener("input", e => {
            todo.notes = e.target.value
            window.localStorage.setItem("projects", JSON.stringify(projects))
        })
    }
    static checklistListener = (todo) => {
        const checklistAddButton = document.querySelector("#checklist-add-button")
        const checklist = document.querySelector("#checklist-ul")
        checklistAddButton.addEventListener("click", e => {
            e.preventDefault()
            todo.checklist.push(e.target.form[0].value)
            window.localStorage.setItem("projects", JSON.stringify(projects))
            checklist.innerHTML = ""
            todo.checklist.forEach(checklistElement => {
                const li = document.createElement("li")
                li.innerText = checklistElement
                checklist.appendChild(li)
                e.target.form[0].value = ""
            }) 
            
        })
    }
    static priorityListener = (todo) => {
        const priorityInput = document.querySelector(".pane-priority")
        const colorDiv = document.querySelector(".color-div")
        priorityInput.addEventListener("change", e => {
            console.log(e.target.value)
            todo.priority = e.target.value
            window.localStorage.setItem("projects", JSON.stringify(projects))
            colorDiv.className = ""
            colorDiv.classList.add((todo.priority === "high" ? "high" : todo.priority === "medium" ? "medium" : "low") + "-pane") 
            colorDiv.classList.add("color-div")

            TodoViewer.clearTodos()
            TodoViewer.updateTodos()
            TodoInput.createInput()
        })
    }
    static dueDateListener = (todo) => {
        const dueDate = document.querySelector(".pane-due-date")
        dueDate.onchange = (e) => {
            console.log("lol ", dueDate.value, "event", e.target.value)
            todo.dueDate = e.target.value
            TodoViewer.clearTodos()
            TodoViewer.updateTodos()
            TodoInput.createInput()
        }
    }
    static titleListener = (todo) => {
        const title = document.querySelector(".pane-title")
        title.addEventListener("input", e => {
            todo.title = e.target.value
            TodoViewer.clearTodos()
            TodoViewer.updateTodos()
            TodoInput.createInput()
        })
    }
}
