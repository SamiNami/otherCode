

let budgetController = (function(){

  let Expense = function(id, description, value){
    this.is = id;
    this.description = description;
    this.value = value;
  };

  let Income = function(id, description, value){
    this.is = id;
    this.description = description;
    this.value = value;
  };



  let data = {
    allItems:{
        exp:[],
        inc:[]
    },
    totals: {
        exp:0,
        inc:0
    }
  };

})();

let Expense = function(id, description, value){
  this.is = id;
  this.description = description;
  this.value = value;
}

let UIController = (function(){

  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function(){
      return{
        // type will be either inc or exp
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function(){
      return DOMstrings;
    }

  };

})();



// Global App Controller
let controller = (function(budgetCtrl,UICtrl){

  let setupEventListeners = function(){

    let DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem);

    document.addEventListener("keypress", function(event){

      if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
    });
  };




  let ctrlAddItem = function(){

    // 1. Get the field input data
    let input = UICtrl.getInput();
    console.log(input);

    //2. Add the item to the budget Controller

    //3. Add the item the the UI

    //4. Calculate the budget

    //5. Display the budget on the UI

    console.log("tset");
  };

  return{
    init: function(){
      setupEventListeners();
    }
  }

})(budgetController,UIController);

controller.init();
