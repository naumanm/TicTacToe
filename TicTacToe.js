// - mikeNauman --

window.onload = main;

  var whosTurn = "X";

function main() {
  // TODO: Should do a reset
  // resetGame();
  // Start game listener
  console.log(whosTurn); 
  document.getElementById("myStartButton").addEventListener("click", startGame);
}

function startGame() {
  
  //document.getElementById("myStartButton").removeEventListener("click", startGame, false);
  
/*
  //---------------------------------------
  // get a list of all the game squares
  // var mySquares = document.getElementsByClassName("mySquare");
  // console.log(mySquares.length);
  // console.log(mySquares);

  // Assign listener to the game squares "mySquares[j]"" 
  // for(var j = 1; j < mySquares.length; j++) {
  //   mySquares[j].addEventListener("click", oneTurn);
  // }
*/


  // TODO: work around for the For loop above
  document.getElementById("p1").addEventListener("click", oneTurn);
  document.getElementById("p2").addEventListener("click", oneTurn);
  document.getElementById("p3").addEventListener("click", oneTurn);
  document.getElementById("p4").addEventListener("click", oneTurn);
  document.getElementById("p5").addEventListener("click", oneTurn);
  document.getElementById("p6").addEventListener("click", oneTurn);
  document.getElementById("p7").addEventListener("click", oneTurn);
  document.getElementById("p8").addEventListener("click", oneTurn);
  document.getElementById("p9").addEventListener("click", oneTurn);

}

//---------------------------------------
// 
function oneTurn () {
  var myID = this.id;  
  event.target.setAttribute("src", "./images/" + whosTurn + ".jpeg");

  event.target.setAttribute("class", whosTurn);

  console.log("whosTurn :" + whosTurn);
  console.log("This should be the button id: " + myID);
  
  // checks to see if the last click won the game
  checkIfWinner();

  if (whosTurn == "X") {
  	whosTurn = "O";
  } else {
    whosTurn = "X";
  } 
}

//---------------------------------------
// 
function checkIfWinner () {
	// will check to see if there is a winner by 
  var winner = false;

	//if (winner) {
      console.log("Do we have a winner?" );
      return winner;
	//}
	// looking at the values of each 
}
