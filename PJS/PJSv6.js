
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
  toggleCompleted: function(position){
    todoList.toggleCompleted(position);
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

    todoList.todos.forEach(function(todo,position){
      let todoLi = document.createElement("li");
      let todoTextWithCompletion = "";

      let checkBox = this.createCheckBox();

      if (todo.completed === true) {
       todoTextWithCompletion = todo.todoText;
       checkBox.checked = true;
      }
      else{
       todoTextWithCompletion = todo.todoText;
       checkBox.checked = false;
      }
      todoLi.id = position;
      // there is a textcontent property on these li elements, that you can change
      todoLi.textContent = todoTextWithCompletion;
      todoLi.insertAdjacentElement("afterbegin", checkBox);
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);

    }, this);

  },
  createCheckBox: function(){
    let checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "checkBox";
    return checkBox;
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
      // check if elementClicked was a checkBox
      else if (elementClicked.className === "checkBox") {
        handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
      }

    });
  }
}

view.setUpEventListeners();

// add this to the view object
let addToDoTextInput = document.getElementById("addToDoTextInput")
    addToDoTextInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("addEventToListButton").click();
    }
});
