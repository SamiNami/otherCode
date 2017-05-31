let born = [1942,1988,2010,1977];

let arr = [];
for(let i = 0;i < born.length; i++){
  arr.push(born[i]);
}

console.log(born);
console.log(arr);


for(let i = 0;i < born.length; i++){

  if(2017 - born[i] >= 18){
    console.log("Full age! Age:" + (2017 - born[i]));
  }
  else{
    console.log("Underage! Age:" + (2017 - born[i]));
  }
}
function printFullAge(years){
  let arr = [];

  for(let i = 0;i < years.length; i++){
    arr.push(years[i]);
  }


  for(let i = 0;i < years.length; i++){

    if(2017 - born[i] >= 18){
      console.log("Full age! Age:" + (2017 - born[i]));
      arr[i] = true;
    }
    else{
      console.log("Underage! Age:" + (2017 - born[i]));
      arr[i] = false;
    }
  }
  return arr;
}

let test = printFullAge(born);
console.log(test);
console.log(born);
