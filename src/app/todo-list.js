class TodoList {
    constructor(projectName) {
        this.projectName = projectName
        this.todos  = []
    }
    addTodo = (todo) => {
        this.todos.push(todo)
        console.log(this.todos)
    }
}