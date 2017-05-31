
/*
let name = "John";
console.log(name);

let lastName = "Smith";
console.log(lastName);

let age = 26;
console.log(age);


let fullAge = true;
console.log(fullAge);
*/
/*
let name = "John";
let age = 26;
console.log(name + age);

let job, isMarried;

console.log(job);

job = "teacher";
isMarried = false;

console.log(name + " is a " + age+ " years old " +job+ ". Is he married? " + isMarried + ".");

age = "thirthy six";
job = "driver";

console.log(name + " is a " + age+ " years old " +job+ ". Is he married? " + isMarried + ".");

let lastName = prompt("What is the last name?");

alert("Your name is " + lastName);
*/
/*
let now = 2017;
let birthYear = now - 26;

birthYear = now - 26 * 2;


console.log(birthYear);

let ageJohn = 30;
let ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26
ageJohn++;
ageMark *= 2;

console.log(ageJohn , ageMark);
*/
/*
let name = "John";
let age = 26;
let isMarried = "no";

if(isMarried === "yes"){
  console.log(name + " is married!");
}
else{
  console.log(name + " will marry soon!");
}

isMarried = false;

if(isMarried){
  console.log("YES!");
}
else{
  console.log("NO");
}

if(23 == "23"){
  console.log("Somethin to print");
}
*/
/*
let age = 25;

if(age < 20){
  console.log("john is a teenager");
}
else if(age > 20 && age < 30){
  console.log("John is a young man");
}
else{
  console.log("John is a man");
}

let job = "teacher";
//job = prompt("What does John do?");

switch (job){
  case "teacher":
    console.log("John teacher kids.");
    break;
  case "driver":
    console.log("John drives a cab!");
    break;
  case "cop":
    console.log("John is a cop!");
    break;
  default:
    console.log("John does something else");
}
*/
// arguments are passed into functions
// parameters are what functions take
/*
function calculateAge(yearOfBirth){
  let age = 2017 - yearOfBirth;
  return age;
}

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1969);
let ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year){
  let age = calculateAge(year);
  let retire = 65 - age;

  if(retire >= 0){
      console.log(name + " retires in " + retire);
  }
  else{
      console.log(name + " has already retired");
  }

}


yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);
*/
/*
// function statement
function someFunction(parameters){
  //code
}
// function expression
let someFun = function(par){
  // code
}
*/
/*
let names = ["John", "Jane", "Mark"];
let years = ["1990", "1969", "1948"];

console.log(names[0]);
names[1] = "Ben";
console.log(names);

let john =["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
john.pop();
john.shift();

console.log(john);

if(john.indexOf("teacher") === -1 ){
  console.log("John is not a teacher.");
}
*/


/*

let john = {
  name: "john",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false
};

console.log(john.lastName);
console.log(john ["lastName"]);
let xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";


console.log(john);

let jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane.yearOfBirth = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);
*/
/*
let john = {
  name: "john",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function(){
    return 2017 - this.yearOfBirth;
  }
};

console.log(john.calculateAge());

let age = john.calculateAge();
john.age = age;

console.log(john);
*/
/*
let john = {
  name: "john",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function(){
    this.age = 2017 - this.yearOfBirth;
  }
};
john.calculateAge();
console.log(john);

let mike = {
  name: "Mike",
  lastName: "Smith",
  yearOfBirth: 1950,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],
  calculateAge: function(){
    this.age = 2017 - this.yearOfBirth;
  }
};
mike.calculateAge();
console.log(mike);



let car = {
    model: "Totota",
    wheels: "Big",
    topspeed: 150
  };

console.log(car);
*/
/*
for(let i = 0; i < 10; i++){
  console.log(i);
}
*/
/*
let names = ["john", "jane","marry","bob"];

for(let i = 0;i < names.length; i++){
  console.log(names[i]);
}
for(let i = names.length -1;i >=0  ; i--){
  console.log(names[i]);
}
let i = 0;

while(i < names.length) {
  console.log(names[i]);
  i++;
}

for(let i = 0; i <= 5; i++){

  if(i === 3){
    continue;
  }

  console.log(i);

}
*/
