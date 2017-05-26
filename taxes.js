//Write a function that takes two arguments, an amount in dollars and a tax percentage.
// Return an array with the tax amount in cents.

function tax(dollars,percent){

  var amount = [];

  percent = percent * 0.01;
  amount[0] = dollars * percent * 100;


  return amount;


}



console.log(tax(306570,3));
