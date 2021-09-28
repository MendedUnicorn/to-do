export class TodoList {
    constructor(projectName) {
        this.projectName = projectName
        this.todos  = []
    }
    addTodo = (todo) => {
        this.todos.push(todo)
    }
    listTodos = () => {
         this.todos.forEach(todo => {console.log(todos)})
    }
}