
window.onload = main;

function main() {
  // event listeners
  document.getElementById("myStartButton").addEventListener("click", startGame);
}

function clickSquare(squareValue) {

	/* need to pass in state, X or O
	onclick change state, 
	make unselectable
	*/
}

function startGame() {
  console.log("Start the Game!");
  var whosTurn = "X";
  var winner = false;

  for (var i = 1; i < 10; i++) {
      // prompt user for input
  	  // wait for user input...
/*  	

		square check
		is clickable, use mouseover
		
		clickSquare(whosTurn);

		onclick change state, 
		assign whoseTurn
		make unselectable
       next turn

*/
	  checkIfWinner();

      if (whosTurn == "X") {
        whosTurn = "O"; 
      } else {
        whosTurn = "X";
      }
      console.log(whosTurn);

  } 
}

function checkIfWinner () {
	// will check to see if there is a winner by 
	// looking at the values of each 
}
