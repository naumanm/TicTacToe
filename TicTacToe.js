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

  // Assign listener to the game squares
  for(var j = 0; j < mySquares.length; j++) {
    mySquares[j].addEventListener("click", nextTurn(whosTurn));	
  }

  //---------------------------------------
  // main game loop
  for (var i = 1; i < 10; i++) {
    // debugging
    console.log("gameLoop: " + i);
    console.log("whos turn " + whosTurn);


  //   var reset = document.getElementById("reset");
  //    reset.addEventListener("click", function (event) {
  //      // Notice how I can reuse the groceries variable from above.
  //      for (var i = 0; i < groceries.length; i++) {
  //        groceries[i].setAttribute("class", "");
  //      }
  //      document.querySelector("img").setAttribute("src", "images/panic.jpeg");
  //    });

      // checks to see if the last click won the game
	checkIfWinner();

    if (whosTurn == "X") {
      whosTurn = "O"; 
    } else {
      whosTurn = "X";
    }
  }
} 


function nextTurn(whosTurn) {

    console.log("nextTurn: " + whosTurn);
    var selected = false;


    //var myID = event.target.getElementById.getAttribute("id");

    //console.log(myID);
    
    /*  This is going to wait for a click
    while (selected) {
	}
    */

	/* need to pass in state, X or O
	onclick change state, 
	make unselectable
	*/
//		square check
//		is clickable, use mouseover



}

function checkIfWinner () {
	// will check to see if there is a winner by 
	//if (winner) {
      console.log("The winner is?" );
	//}
	// looking at the values of each 
}
