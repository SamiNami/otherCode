// quizgame in console

(function(){



  function Question(question,answers,correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for(let i = 0; i < this.answers.length;i++){
      console.log(i + ": " +this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans,callback){
    let sc;

    if(ans == this.correct){
      console.log("Correct!");
      sc = callback(true);
    }
    else{
      console.log("Wrong!");
      sc = callback(false);
    }

    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score){
    console.log("Your current score is: " + score);
    console.log("--------------------------------");
  }


  let q1 = new Question("How old is Donald Trump?",["Under 50 years old","Over 50 y/o"],1);
  let q2 = new Question("Is China number 1?",["Yes","No"],0);
  let q3 = new Question("What number is USA?",["USA #1","USA is numbah 4"],1);

  let arr = [q1,q2,q3];

  function score(){
    let sc = 0;
    return function(correct){
      if(correct){
        sc++;
      }
      return sc;
    }
  }

  let keepScore = score();


  function makeQuestion(){

    let n = Math.floor(Math.random() * arr.length);
    arr[n].displayQuestion();

    let answer = prompt("Please select the correct answer!");

    if(answer === "exit"){
      return;
    }

    arr[n].checkAnswer(answer, keepScore);
    makeQuestion();
  }

  makeQuestion();

})();
