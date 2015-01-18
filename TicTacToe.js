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
  var winner = false;

  // get a list of all the game squares
  var mySquares = document.getElementsByClassName("mySquare");

  // Assign listener to the game squares "mySquares[j]"" 
  for(var j = 0; j < mySquares.length; j++) {
    mySquares[j].addEventListener("click", assignSquare());	
  }

  //---------------------------------------
  // main game loop
  for (var i = 1; i < 9; i++) {
    // debugging
    console.log("gameLoop: " + i);
    console.log("whos turn " + whosTurn);

    // nextTurn();

    // checks to see if the last click won the game
	checkIfWinner();

    if (whosTurn == "X") {
      whosTurn = "O"; 
    } else {
      whosTurn = "X";
    }
  }
} 


function assignSquare() {

  console.log("Assign listeners: ");
  var selected = false;

    //var myID = event.target.getElementById.getAttribute("id");


    // can we do a while (timeout is not null)?  


    //console.log(myID);
    
    /*  This is going to wait for a click
    while (selected) {
	}
    

	need to pass in state, X or O
	onclick change state, 
	make unselectable
    square check
    is clickable, use mouseover
  
    return X or O and ID
  */
}

function checkIfWinner () {
	// will check to see if there is a winner by 
	//if (winner) {
      console.log("Do we have a winner?" );
      return winner;
	//}
	// looking at the values of each 
}
