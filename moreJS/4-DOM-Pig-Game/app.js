/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
EXTRA RULES:
- A player loses his entire score if he rolls two sixes in a row
-

*/

let scores,roundScore,activePlayer, gamePlaying,lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", function(){

  // check if the game should run
  if(!gamePlaying){
    return;
  }

  // get a number from 1 to 6
  let dice = Math.floor(Math.random() * 6) + 1;


  // display result
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //check if two 6 was rolled in a row
  if(dice === 6 && lastDice === 6){
    scores[activePlayer] = 0;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
  }
  //Update the round score, but only if it's not 1
  else if(dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    //record the dice throw
    lastDice = dice;
  }
  else{
    //next player
    nextPlayer();
  }

});

document.querySelector(".btn-hold").addEventListener("click", function(){

    if(!gamePlaying){
      return;
    }

    // add current score to Global score
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
    // check if player won the game
    if(scores[activePlayer] >= parseInt(document.getElementById("inputScore").value)){
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer+ "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer+"-panel").classList.remove("active");
      gamePlaying = false;
    }
    else{
    nextPlayer();
    }

});


function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  lastDice = 0;

  document.getElementById("current-0").textContent ="0";
  document.getElementById("current-1").textContent ="0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}


document.querySelector(".btn-new").addEventListener("click", init);


function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  lastDice = 0;


  document.querySelector(".dice").style.display = "none";

  document.getElementById('score-0').textContent = "0";
  document.getElementById('score-1').textContent = "0";
  document.getElementById('current-0').textContent = "0";
  document.getElementById('current-1').textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
