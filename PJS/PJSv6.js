
let todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo(position, todoText){
    this.todos[position].todoText = todoText;
  },
  deleteTodo(position){
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  // if all of the "completed" are true, toggle all to false,
  // else make them all true.
  toggleAll: function(){

    let totalTodos = this.todos.length;
    let completedTodos =0;

    // get the number of completed todos.
    this.todos.forEach(function(todo){
      if(todo.completed === true){
        completedTodos++;
      }
    });

    // loop through the todos array and depending set them all to true or false.
    this.todos.forEach(function(todo){
      if(completedTodos === totalTodos){
        todo.completed = false;
      }
      else{
        todo.completed = true;
      }
    });



  }

};


let handlers = {
  addTodo: function(){
    let addTodoTextInput = document.getElementById('addToDoTextInput');
    // . value will grab the value from the DOM input
    todoList.addTodo(addTodoTextInput.value);
    // clear the text
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function(){
    let changeTodoPositionInput = document.getElementById("changeTodoPositionInput")
    let changeTodoPositionTextInput = document.getElementById("changeTodoPositionTextInput")
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoPositionTextInput.value);

    changeTodoPositionInput.value = "";
    changeTodoPositionTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll:function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};

// responssible for what the user can see

let view = {
  displayTodos: function(){
    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for(let i = 0; i < todoList.todos.length;i++){
      let todoLi = document.createElement("li");
      let todo = todoList.todos[i];
      let todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
      }
      else{
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      todoLi.id = i;
      // there is a textcontent property on these li elements, that you can change
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function(){
    let todoUl = document.querySelector("ul");

    todoUl.addEventListener("click", function(event) {
      // Get the element that was clicked on,
      let elementClicked = event.target;

      // Check if elementClicked is a delete button
      if(elementClicked.className === "deleteButton"){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }

    });
  }
}

view.setUpEventListeners();
