//document.ready(function() {

    var winCounter = 0;
    $("#wins").text(winCounter);
    var lossCounter = 0;
    $("#losses").text(lossCounter);
    var userScore = 0;
    var goalScore = Math.floor(Math.random() * 102) + 19; // creates score that user has to match with his crystal clicks, a random number between 19-120
    var crystalOne = Math.floor(Math.random() * 12) + 1; // creates crystal 1 value, a random number between 1-12
    var crystalTwo = Math.floor(Math.random() * 12) + 1; // creates crystal 2 value, a random number between 1-12
    var crystalThree = Math.floor(Math.random() * 12) + 1; // creates crystal 3 value, a random number between 1-12
    var crystalFour = Math.floor(Math.random() * 12) + 1; // creates crystal 4 value, a random number between 1-12

    $("#goal").text(goalScore);
    console.log(goalScore);
    $("#user-score").html(userScore);
    console.log(userScore);

    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);

    //resets and randomizes the goalScore and each of the four crystals; crystal values are randomly picked between 1-12
    function resetGame() {
        userScore = 0;
        goalScore = Math.floor(Math.random() * 102) + 19;
        crystalOne = Math.floor(Math.random() * 12) + 1; 
        crystalTwo = Math.floor(Math.random() * 12) + 1; 
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour =  Math.floor(Math.random() * 12) + 1;
    $("#goal").text(goalScore);
    $("#user-score").text(userScore);
    console.log(goalScore);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
  }

  // function that creates your win scenario
  function winGame() {
    alert("You win! Play again!");
    winCounter = winCounter + 1;
    $("#wins").text(winCounter);
    resetGame();
  }

  function loseGame() {
      alert("BUST! You lose! Play again!");
      lossCounter = lossCounter + 1;
      $("#losses").text(lossCounter);
      resetGame();
  }

  // creates on click function for crystalOne
  $("#crystal1").click(function() {
    userScore = userScore + crystalOne; // adds value of crystalOne to userScore
    console.log("User Score: " + userScore);
    $("#user-score").text(userScore);
      if (userScore === goalScore) {
        winGame();
      } else if (userScore > goalScore) {
        loseGame();
      }
  });

  // creates on click function for crystalTwo
  $("#crystal2").click(function() {
    userScore = userScore + crystalTwo; // adds value of crystalTwo to userScore
    console.log("User Score: " + userScore);
      $("#user-score").text(userScore);
      if (userScore === goalScore) {
        winGame();
      } else if (userScore > goalScore) {
        loseGame();
      }
  });

  // creates on click function for crystalThree
  $("#crystal3").click(function() {
    userScore = userScore + crystalThree; // adds value of crystalThree to userScore
    console.log("User Score: " + userScore);
      $("#user-score").text(userScore);
      if (userScore === goalScore) {
        winGame();
      } else if (userScore > goalScore) {
        loseGame();
      }
  });

  // creates on click function for crystalFour
  $("#crystal4").click(function() {
    userScore = userScore + crystalFour; // adds value of crystalFour to userScore
    console.log("User Score: " + userScore);
    $("#user-score").text(userScore);
      if (userScore === goalScore) {
        winGame();
      } else if (userScore > goalScore) {
        loseGame();
      }
  });

//Pseudo coding
//A game with 4 crystals
//Player shown a random number at start of game
//Clicking on a crystal adds a specific amount of points to the player's total score
//Each crystal has a different point value
//Game will hide this point value until the player clicks the crystal
//Assigning randomly generated values 1-12 to each crystal 
//Random value of the crystals should change every time we win or lose
//The point of game is to click on crystals until player's total score matches that random number goal

//IF it is not equal, we increment a lose counter and start over
//if it is equal, we increment a win counter and start over


//});

//document.ready();