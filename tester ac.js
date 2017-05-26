// Looks like this is an interview for a java position, I've written the solution in Javascript since I'm more confortable with it


function alternateUpperCase (str) {

  var letters = str.split("");
  var string ="";
  var upper = true;


  letters.forEach(function(letter){

    if(letter === " "){
       string += letter;
      }

      else{
        if(upper === true){
          string += letter.toUpperCase();
          upper = false;
        }
        else{
          string += letter.toLowerCase();
          upper = true;
        }
      }




  });

  return string;
}
alternateUpperCase('TheNumber fourtytwo');

checkstuff();

function checkstuff(){
  console.log(1 == 1);
  console.log("1" == 1);
  console.log(1 === 1);
  console.log("1" === 1);
}
