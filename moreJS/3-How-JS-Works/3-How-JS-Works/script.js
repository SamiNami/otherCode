///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1990);

function calculateAge(year){
  console.log(2017-year);
}

// retirement(1990);

let retirement = function(year){
  console.log(65-(2017 - year));
}


let age = 23;
console.log(age);


function foo(){
  let age = 65;
  console.log(age);
}

foo();
console.log(age);
*/








///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
let a = 'Hello!';
first();

function first() {
    let b = 'Hi!';
    second();

    function second() {
        let c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

/*
calculateAge(1985);

function calculateAge(year){
  console.log(2016 - year);
  console.log(this);
}
*/
var john = {
  name: "john",
  yearOfBirth: 1990,
  calculateAge: function (){
    console.log(this);
    console.log(2016 - this.yearOfBirth);
    /*
    function innerFunction(){
      console.log(this);
    }
    innerFunction();
    */
  }
}

john.calculateAge();

let mike = {
  name: "mike",
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
