// - mikeNauman --

window.onload = main;

function main() {
  // Start game listener
  document.getElementById("myStartButton").addEventListener("click", gameLoop);
}

function gameLoop() {
  //---------------------------------------
  // setup 
  var whosTurn = "X";

  // get a list of all the game squares
  var mySquares = document.getElementsByClassName("mySquare");

  // Assign listener to the game squares "mySquares[j]"" 
  for(var j = 0; j < mySquares.length; j++) {
    mySquares[j].addEventListener("click", squareClicked());	
  }

  //---------------------------------------
  // main game loop
  for (var i = 1; i < 10; i++) {
    // debugging
    console.log("gameLoop: " + i);
    console.log("whos turn " + whosTurn);

    nextTurn(whosTurn);  

    // checks to see if the last click won the game
	checkIfWinner();

    if (whosTurn == "X") {
      whosTurn = "O"; 
    } else {
      whosTurn = "X";
    }
  }
} 

function nextTurn(squareValue) {
  
  console.log("from inside nextTurn: " + squareValue);

  var test = false;
  while (test) {
  //  this is where we wait this is our loop
  //  squareValue the X 0 O
    return (true);
  }

}

function squareClicked() {

  return true;

}

function checkIfWinner () {
	// will check to see if there is a winner by 
  var winner = false

	//if (winner) {
      console.log("Do we have a winner?" );
      return winner;
	//}
	// looking at the values of each 
}
