let todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log("Your todo list is empty")
    }
    else{
      console.log("My Todos: ");
      for(let i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log("(x)", this.todos[i].todoText);
        }
        else{
          console.log("( )", this.todos[i].todoText);
        }
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
  },
  // if all of the "completed" are true, toggle all to false,
  // else make them all true.
  toggleAll: function(){
    debugger;
    let totalTodos = this.todos.length;
    let completedTodos =0;

    // get the number of completed todos.
    for(var i=0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }

    // if everything is true, toggle everything to false
    if(completedTodos === totalTodos){
      for(let i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    }
    // else make everything true
    else{
      for(let i = 0;i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }

};

let displayTodosButton = document.getElementById("displayTodosButton");
let toggleAllButton = document.getElementById("toggleAllButton");


displayTodosButton.addEventListener("click", function(){
  todoList.displayTodos();
});

toggleAllButton.addEventListener("click", function(){
  todoList.toggleAll();
});
