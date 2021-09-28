import {Todo} from "./app/todo"
import "./app/index.css"
import {TodoViewer} from "./app/UI/todo-viewer.js"
import {TodoInput} from "./app/UI/todo-input.js"

const  a = new Todo("get bread", "remember to go to groceries to get bread", new Date(), "medium", "remember to do this for your own sake othewise YOU DEAD!", 
[["go to store", false], ["get bread",  false], ["pay for bread", false]])

let todos = []

TodoInput.createInput()
//TodoInput.createInput()