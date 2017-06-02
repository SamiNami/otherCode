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

  Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
      console.log("Correct!");
    }
    else{
      console.log("Wrong!");
    }
  }

  let q1 = new Question("How old is Donald Trump?",["Under 50 years old","Over 50 y/o"],1);
  let q2 = new Question("Is China number 1?",["Yes","No"],0);
  let q3 = new Question("What number is USA?",["USA #1","USA is numbah 4"],1);

  let arr = [q1,q2,q3];


  let n = Math.floor(Math.random() * arr.length);

  arr[n].displayQuestion();

  let answer = parseInt(prompt("Please select the correct answer!"));

  arr[n].checkAnswer(answer);

})();
