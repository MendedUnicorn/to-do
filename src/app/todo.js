import {format, isDate} from "date-fns"


export class Todo {
    constructor(title, checked, dueDate, priority, notes, checklist, project) {
        this.title = title
        this.checked = checked
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.checklist = checklist
        this.project = project
        this.checked = false

    }

    addTodo = () => {

    }
    // get title() {
    //     return this._title
    // }

    // set title(value) {
    //     if (value.length < 1) {
    //         alert("Please enter a title")
    //         console.log("Please enter a title");
    //         return
    //     }
    //     this._title = value
    // }
    // set dueDate(date) {
    //     if(!isDate(date)) {
    //         console.log("is a not date")
    //         return;
    //     }
    //     this._date = date
    //     console.log("is a date");
    // }
    

}
