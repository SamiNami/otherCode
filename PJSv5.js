
let todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log("Your todo list is empty")
    }
    else{
      console.log("My Todos: ");
      for(let i = 0; i < this.todos.length; i++){
        console.log(this.todos[i].todoText);
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo("First");
todoList.addTodo("Second");
