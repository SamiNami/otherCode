// Imagine you have two array a = [1,2,3,4,5] and b =[3,2,9,3,7],
//  write a program to find out common elements in both array.

var a = [1,2,3,4,5];
var b =[3,2,9,3,7];

var common =[];

a.forEach(function(number){

  if(b.indexOf(number) !== -1){
    common.push(number);
  }

});

console.log(common);
