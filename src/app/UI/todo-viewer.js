import {format} from "date-fns"


export class TodoViewer {
    constructor() {

    }
    static createTodo = (todo) => {
        const todoList = document.querySelector(".to-do-list")
        const todoElement = document.createElement("div")
        todoElement.classList.add("todo")
        todoElement.append(this.createTitle(todo), this.createDueDate(todo), this.createPrioriy(todo), this.createNotes(todo), this.createChecklist(todo), document.createElement("br") )
        todoList.appendChild(todoElement)

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
        todoDueDate.innerText = todo.dueDate //format(todo.dueDate, "dd-MM-yyyy")
        return todoDueDate
    }
    static createPrioriy = (todo) => {
        const todoPriority = document.createElement("p")
        todoPriority.classList = "priority"
        todoPriority.innerText = todo.priority
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

}



//title, description, dueDate, priority, notes, checklist, project