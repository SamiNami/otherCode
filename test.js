// fizzbuzz

for(i = 1; i <= 100; i++){

  print = i;

  if(i % 3 === 0 ){
    print = "Fizz";
  }

  if(i % 5 === 0 ){
    print = "Buzz";
  }

  if(i % 5 === 0 && i % 3 === 0 ){
    print = "FizzBuzz";
  }

  console.log(print);
}
