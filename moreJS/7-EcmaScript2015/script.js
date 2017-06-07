// Let and Const

// ES5
/*
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

//ES6
const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6);
*/
/*
// ES5
function driversLicence5(passedTest){

  if(passedTest){
    var firstName = "john";
    var yearOfBirth = 1990;

  }
  console.log(firstName +", born in" +  yearOfBirth +
  " is now allowed to drive a car");
}
driversLicence5(true);


// ES6 let is block scoped, but not function scoped like var is
function driversLicence6(passedTest){

  let firstName;
  const yearOfBirth = 1990;

  if(passedTest){

    firstName = "john";

    console.log(firstName +", born in" +  yearOfBirth +
    " is now allowed to drive a car");
  }

}
driversLicence6(true);


let i = 23;

for(let i = 0;i < 5; i++){
  console.log(i);
}

console.log(i);
*/

// Blocks and IIFEs
/*
//ES6
{
  const a =1;
  let b = 2;
  var c = 3;
}

//console.log(a + b);
console.log(c);

//ES5
(function(){
  var c =3;
})();

//console.log(c);
*/

// Strings
/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year){
  return 2016 - year;
}

// ES5
console.log("This is " + firstName + " " + lastName + ", He was born in "+
yearOfBirth + ". Today he is " + calcAge(yearOfBirth) + " years old.");

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("Jo"));
console.log(n.endsWith("th"));
console.log(n.includes("oh"));
console.log(`${firstName} `.repeat(5));
*/

// Arrow functions
/*
const years = [1990,1965,1982,1937];

//ES5

var ages5 = years.map(function(el){
  return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el,index) => `Age element ${index + 1}: ${2016 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear()
  const age = now - el;
  return `Age element ${index + 1}: ${age}`
});
console.log(ages6);



years.forEach(el => console.log(el));

years.forEach((el,index) => console.log(`Order of entered: ${index} The year: ${el}`));

years.forEach((el,index) => {
  const result = el - 1000;
  console.log(`Element - 1000 = ${result} ps, this is the index: ${index}`);
});
*/


// Arrow function 2

// ES5
/*
var box5 = {
  color: "green",
  position: 1,
  clickMe: function(){
    //ES5 hack
    var self = this;

    document.querySelector(".green").addEventListener("click", function(){
        var str = "This is box number " + self.position + " and it is " + self.color;
        alert(str);
    });
  }
}
box5.clickMe();
*/
//ES6

const box6 = {
  color: "green",
  position: 1,
  clickMe: function(){

    document.querySelector(".green").addEventListener("click", () =>{
        var str = "This is box number " + this.position + " and it is " + this.color;
        alert(str);
    });
  }
}
//box6.clickMe();

// be careful with arrow fucntions!
/*
const box66 = {
  color: "green",
  position: 1,
  clickMe: () =>{

    document.querySelector(".green").addEventListener("click", () =>{
        var str = "This is box number " + this.position + " and it is " + this.color;
        alert(str);
    });
  }
}
box66.clickMe();



function Person(name){
  this.name = name;
}
*/
/*
//ES5
Person.prototype.myFriends5 = function(friends){

  var arr = friends.map(function(el){
    return this.name + " is friends with " + el;
  }.bind(this));

  console.log(arr);
}

var friends = ["bob","jane","mark"];
new Person("John").myFriends5(friends);

// ES6

function Person(name){
  this.name = name;
}

//ES5
Person.prototype.myFriends6 = function(friends){

  var arr = friends.map(el => `${this.name} is friends with ${el}`
    );

  console.log(arr);
}

let friends = ["bob","jane","mark"];
new Person("Mike").myFriends6(friends);
*/

// Destrcuturing

//ES5
/*
var john = ["John", 26];
//var name = john[0];
//var age = john[1];

//ES6

const [name,age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "John",
  lastName: "Smith"
};



const {firstName, lastName} = obj;
console.log(firstName, lastName);

// if you want different names for the variables
const {firstName: a, lastName: b} = obj;
console.log(a,b);

//returning many values with Destrcuturing
function calcAgeRetirement(year){
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const[age1,retirement] = calcAgeRetirement(1990);
console.log(age1,retirement);
*/


// Arrays
/*
const boxes = document.querySelectorAll(".box");

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
// now we have an Array
boxesArr5.forEach(function(cur){
  cur.style.backgroundColor = "dodgerblue";
});


//ES6
// this transforms nodelist into array!
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = "dodgerblue");
*/
//ES5
/*
for(var i = 0;i < boxesArr5.length;i++){

  if(boxesArr5[i].className === "box blue"){
    continue;
  }

  boxesArr5[i].textContent= "I changed to blue";

}
*/
/*
//ES6
// for off loop
  for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
      continue;
    }
    cur.textContent = "I changed to blue!";
  }
*/
// ES5
/*
var ages = [12,17,8,21,14,11];

var full = ages.map(function(el){
  return el >= 18;
})
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6 find index and find

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

// Spread Operator
/*
function addFourAges(a,b,c,d){
  return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//ES5
var  ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


//ES6 ... = spread operator expands the arrays components
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["john", "jane","mark"];
const familyMiller = ["marn", "kappa","zubraza"];

const bigFamily = [...familySmith,"Lily",...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = "purple");
*/

//Rest parameters

//ES5
/*
function isFullAge5(){
  //console.log(arguments);
  var argrArr = Array.prototype.slice.call(arguments);

  argrArr.forEach(function(cur){
    console.log((2016 - cur) >= 18);
  });
}

isFullAge5(1990,1999,1965,2016,1987);
*/
/*
//ES6

function isFullAge6(...years){
  years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990,1999,1965,2016,1987);
*/
/*

function isFullAge5(limit){
  //console.log(arguments);
  //exludes the first argument
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur){
    console.log((2016 - cur) >= limit);
  });
}

//isFullAge5(16,1990,1999,1965,2016,1987);


//ES6

function isFullAge6(limit,...years){
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16,1990,1999,1965,2016,1987);
*/

// Default parameters

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

  lastName === undefined ? lastName = "Smith": lastName = lastName;
  nationality === undefined ? nationality = "american": nationality = nationality;

}
this.firstName = firstName;
this.lastName = lastName;
this.yearOfBirth = yearOfBirth;
this.nationality = nationality;

var john = new SmithPerson("John",1990);
console.log(john);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spansis");
console.log(emily);
*/

//ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "american"){
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson("John",1990);
console.log(john);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spansish");
console.log(emily);
*/
