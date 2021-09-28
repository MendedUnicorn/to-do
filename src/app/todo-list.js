export class TodoList {
    constructor(projectName) {
        this.projectName = projectName
        this.todos  = []
    }
    addTodo = (todo) => {
        this.todos.push(todo)
    }
    removeTodo = () => {
        this.todos
    }

    listTodos = () => {
         this.todos.forEach(todo => {console.log(todos)})
    }
}