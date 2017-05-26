//  Write a function that takes two words as an argument and returns true if they are anagrams
//(contain the exact same letters) and false otherwise.

function checkAnagram(string, string2){

  var array = string.split("");
  var array2 = string2.split("");

  array.sort();
  array2.sort();

  string = array.join("");
  string2 = array2.join("");

  if(string === string2){
    return true;
  }
      return false;


}



console.log(checkAnagram("cow","wco"));
