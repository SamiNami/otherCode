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
