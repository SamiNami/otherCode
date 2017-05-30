
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
    //save to localStorage
    localStorage.setItem("savedData", JSON.stringify(todoList.todos));
  },
  changeTodo: function(position,text){
    todoList.changeTodo(position,text);
    view.displayTodos();
    localStorage.setItem("savedData", JSON.stringify(todoList.todos));
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
    localStorage.setItem("savedData", JSON.stringify(todoList.todos));
  },
  toggleCompleted: function(position){
    todoList.toggleCompleted(position);
    view.displayTodos();
    localStorage.setItem("savedData", JSON.stringify(todoList.todos));
  },
  toggleAll:function(){
    todoList.toggleAll();
    view.displayTodos();
    localStorage.setItem("savedData", JSON.stringify(todoList.todos));
  },
  loadLocalStorage: function(){
      let saveData = JSON.parse(localStorage.getItem("savedData"));

      if(saveData === null){
        return;
      }

      todoList.todos = saveData;
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

      let label = this.createLabel();
      label.innerText = todoTextWithCompletion;

      todoLi.appendChild(label);
      todoLi.insertAdjacentElement("afterbegin", checkBox);
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);

    }, this);

  },
  createLabel: function(){
    let label = document.createElement("LABEL");
    label.contentEditable = "true";
    label.className = "label";
    return label;
  },
  createCheckBox: function(){
    let checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "checkBox";
    return checkBox;
  },
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = " (X) ";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function(){
    view.setUpClickListeners();
    view.setUpKeyListenders();
  },
  setUpClickListeners: function (){
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
  },
  setUpKeyListenders: function(){
    // get the unordered list
    let todoUl = document.querySelector("ul");

    todoUl.addEventListener("keyup", function(event) {

    let elementUsed = event.target;
    event.preventDefault();

      if (event.keyCode == 13) {
          // get the current text
          text = elementUsed.innerText;
          // remove newLines
          text = text.replace(/(\r\n|\n|\r)/gm,"");
          handlers.changeTodo(parseInt(elementUsed.parentNode.id),text);
      }
    });
    // This allows the user to use the enter Key when adding items to the list
    let addToDoTextInput = document.getElementById("addToDoTextInput")
        addToDoTextInput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("addEventToListButton").click();
        }
    });


  }
}

view.setUpEventListeners();
handlers.loadLocalStorage();
