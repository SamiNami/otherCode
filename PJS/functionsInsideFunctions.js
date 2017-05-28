//
function runWithDebugger(ourFunction){
  debugger;
  ourFunction();
}

//

setTimeout(function() {
  console.log("Wake up dude");
}, 5000)

//

let students = ["kappa","papamustard","elliot"];

function logName(name){
  console.log(name);
}


students.forEach(logName);


students.forEach(function(name){
  console.log(name);
});


function forEach(myArray, myFunction){
  for (let i = 0; i< myArray.length; i++){
    myFunction(myArray[i]);
  }
}

console.log("");

forEach(students, function(student) {
  console.log(student);
})
