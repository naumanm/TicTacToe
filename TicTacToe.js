// - mikeNauman --

window.onload = main;

function main() {
  // event listeners
  document.getElementById("myStartButton").addEventListener("click", gameLoop);
}

function gameLoop() {
  var whosTurn = "X";
  var winner = false;

  for (var i = 1; i < 10; i++) {
    // get all the squares 
    var mySquares = document.getElementsByClassName("mySquare");
    
    console.log("number of squares");    
    console.log(mySquares.length);

    // adding event listeners to each square on gameboard
    // TODO: need to only add selectable squares, do all for now
    for(var j = 0; j < mySquares.length; j++) {
      mySquares[j].addEventListener("click", nextTurn(whosTurn));	


 //   var reset = document.getElementById("reset");
 //    reset.addEventListener("click", function (event) {
 //      // Notice how I can reuse the groceries variable from above.
 //      for (var i = 0; i < groceries.length; i++) {
 //        groceries[i].setAttribute("class", "");
 //      }
 //      document.querySelector("img").setAttribute("src", "images/panic.jpeg");
 //    });


    }

      // checks to see if the last click won the game
	  //checkIfWinner();

    if (whosTurn == "X") {
      whosTurn = "O"; 
    } else {
      whosTurn = "X";
    }
   
    console.log("gameLoop: " + i);
    console.log("whos turn " + whosTurn);

  } 
}

function nextTurn(whosTurn) {

    console.log("should not be seeing this unless there has been a click");
    console.log("nextTurn: " + whosTurn);

	/* need to pass in state, X or O
	onclick change state, 
	make unselectable
	*/
//		square check
//		is clickable, use mouseover



}

function checkIfWinner () {
	// will check to see if there is a winner by 
	// looking at the values of each 
}
