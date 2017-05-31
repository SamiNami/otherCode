
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
  console.log(retire);
}


yearsUntilRetirement("John", 1990);
