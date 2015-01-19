// - mikeNauman --

window.onload = main;
var whosTurn = "X";


function main() {
  // Start game listener
  document.getElementById("myStartButton").addEventListener("click", startGame);
}

function startGame() {
  //---------------------------------------
  // get a list of all the game squares
  var mySquares = document.getElementsByClassName("mySquare");
  console.log(mySquares.length);

  // Assign listener to the game squares "mySquares[j]"" 
  for(var j = 1; j < mySquares.length; j++) {
    mySquares[j].addEventListener("click", oneTurn);
  }
}

  //---------------------------------------
  // 
function oneTurn () {
  var isClicked = false;
  console.log("whosTurn :" + whosTurn);

  // checks to see if the last click won the game
  checkIfWinner();

  if (whosTurn == "X") {
    return "O"; 
  } else {
    return "X";
  } 
}
 
function squareClicked() {
  console.log("I am inside squareClicked");
  return false;
}

function checkIfWinner () {
	// will check to see if there is a winner by 
  var winner = false;

	//if (winner) {
      console.log("Do we have a winner?" );
      return winner;
	//}
	// looking at the values of each 
}
