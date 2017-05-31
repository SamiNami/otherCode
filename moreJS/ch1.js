

let johnHeight = 180;
let johnAge = 25;

let cenaHeight = 180;
let cenaAge = 25;

let timHeight = 180;
let timAge = 26;



let johnScore = johnHeight + 5 * johnAge;
let cenaScore = cenaHeight + 5 * cenaAge;
let timScore = timHeight + 5 * timAge;

if(johnScore > cenaScore && johnScore > timScore){
  console.log("John wins, his score: " + johnScore);
}
else if(johnScore === cenaScore && johnScore === timScore){
  console.log("It's a draw!");
}
else if(cenaScore > johnScore && cenaScore > timScore){
  console.log("Cena wins, his score: " + cenaScore);
}
else{
  console.log("Tim wins, his score: " + timScore);
}
