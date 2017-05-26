//“Write a function that takes three measurements in centimeters as input and returns
// a the volume over a litre”

function boxSize(int,int2,int3){

  var cube = int * int2 * int3;

  return cube * 0.001;

}



console.log(boxSize(5,10,12));
