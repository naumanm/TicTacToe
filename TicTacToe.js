/*

-- mikeNauman --

Minimum Requirements

A user should be able to click on different squares to make a move.
Every click will alternate between marking an X and O.
Upon marking of an individual cell, use JavaScript to add a class to each 
cell to display separate colors.
A cell should not be able to be replayed once marked.
Add a reset button that will clear the contents of the board.

Bonus

Display a message to indicate which turn is about to be played.
After the necessary moves have been played, stop game and alert t
he winner if one player ends up winning with three in a row.
Hint: Determine a set of winning combinations. Check those combinations 
on the board contents after every move.

Ultra Bonus

We once had a student implement an Artifical Intelligence (AI) opponent. 
If you really need a challenge, write some code that will play a game 
of Tic Tac Toe against you. (Hint: look into the minimax algorithm).

*/

//------------------------------------------------------------------------------

window.onload = main;

// set two globals
var whosTurn = "X";
var gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

//------------------------------------------------------------------------------

function main() {

  // message the user who starts the game
  document.getElementById("nextTurn").innerHTML = (whosTurn + " Starts the game!");
 
  // set listener to start game
  document.getElementById("myStartButton").addEventListener("click", startGame);

  // set listeners for highlighting the start button
  document.getElementById("myStartButton").addEventListener("mouseover", changeButton);
  document.getElementById("myStartButton").addEventListener("mouseout", changeButtonBack);
 
  // this listens for each user to click a square
  for(var i = 1; i < 10; i++) {
    document.getElementById("p" + i).addEventListener("click", oneTurn);
  }
}

//------------------------------------------------------------------------------
// styling for the start button

function changeButton () {
  this.setAttribute("class", "highlightButton");
  this.innerHTML = "GO!";
}

function changeButtonBack () {
  document.getElementById("myStartButton").removeAttribute("class");
  this.innerHTML = "New Game!";
}

//------------------------------------------------------------------------------

function startGame() {
  // remove styling on the next turn h2 header
  document.getElementById("nextTurn").removeAttribute("class");
  // reset for new game button
  whosTurn = "X";
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  // reset all images to question marks
  var myList = document.getElementsByTagName("img");
  for (var i = 0; i < myList.length; i++) {
    myList[i].setAttribute("src", "images/notselected.jpeg");
    myList[i].removeEventListener("click", startGame);
  }
  // change the next turn header to prompt user to start game
  document.getElementById("nextTurn").innerHTML = (whosTurn + " Starts the game!");
  // listen for any click in the game grid
  for(var j = 1; j < 10; j++) {
    document.getElementById("p" + j).addEventListener("click", oneTurn);
  }
}

//------------------------------------------------------------------------------

function oneTurn () {
  var myID = this.id;
  
  event.target.setAttribute("src", "./images/" + whosTurn + ".jpeg");
  this.setAttribute("class", whosTurn);

  if (checkIfWinner(myID)) {
    styleWinner();
    var myList = document.getElementsByTagName("img");
    for (var i = 0; i < myList.length; i++) {
      myList[i].setAttribute("src", "images/notselected.jpeg");
    }
    return;
  } else {
    if (whosTurn == "X") {
      whosTurn = "O";
    } else {
      whosTurn = "X";
    } 
  }
  document.getElementById("nextTurn").innerHTML = ("Next turn: " + whosTurn);
}

//------------------------------------------------------------------------------

function styleWinner() {
  document.getElementById("nextTurn").setAttribute("class", "h2Highlighted");
  document.getElementById("nextTurn").innerHTML = (whosTurn + " is the WINNER!");
}

//------------------------------------------------------------------------------

function checkIfWinner (myID) {
  //  TODO: clean this up

  if (myID == "p1" ) {gameBoard[0][0] = whosTurn;}
  if (myID == "p2" ) {gameBoard[0][1] = whosTurn;}
  if (myID == "p3" ) {gameBoard[0][2] = whosTurn;}
  if (myID == "p4" ) {gameBoard[1][0] = whosTurn;}
  if (myID == "p5" ) {gameBoard[1][1] = whosTurn;}
  if (myID == "p6" ) {gameBoard[1][2] = whosTurn;}
  if (myID == "p7" ) {gameBoard[2][0] = whosTurn;}
  if (myID == "p8" ) {gameBoard[2][1] = whosTurn;}
  if (myID == "p9" ) {gameBoard[2][2] = whosTurn;}

  if ( // START CONDITIONAL
  	  ( // START X
  	    ( // ALL ROWS
  	     ((gameBoard[0][0] == "X") &&
  	      (gameBoard[0][1] == "X") &&
  	      (gameBoard[0][2] == "X")) ||
  	     ((gameBoard[1][0] == "X") &&
          (gameBoard[1][1] == "X") &&
  	      (gameBoard[1][2] == "X")) ||
  	     ((gameBoard[2][0] == "X") &&
  	      (gameBoard[2][1] == "X") &&
  	      (gameBoard[2][2] == "X")) 
        ) ||  // END ROWS
  	    (  // START COLUMNS
  	     ((gameBoard[0][0] == "X") &&
  	      (gameBoard[1][0] == "X") &&
  	      (gameBoard[2][0] == "X")) ||
  	     ((gameBoard[0][1] == "X") &&
  	      (gameBoard[1][1] == "X") &&
  	      (gameBoard[2][1] == "X")) ||
  	     ((gameBoard[0][2] == "X") &&
  	      (gameBoard[1][2] == "X") &&
  	      (gameBoard[2][2] == "X")) 
        ) // END COLUMNS
       ) ||  // END X
  	   (  // START Y
  	    (  // START ROWS
  	     ((gameBoard[0][0] == "O") &&
  	      (gameBoard[0][1] == "O") &&
  	      (gameBoard[0][2] == "O")) ||
  	     ((gameBoard[1][0] == "O") &&
          (gameBoard[1][1] == "O") &&
  	      (gameBoard[1][2] == "O")) ||
  	     ((gameBoard[2][0] == "O") &&
  	      (gameBoard[2][1] == "O") &&
  	      (gameBoard[2][2] == "O")) 
        ) ||  // END ROWS
  	    (  // START COLUMNS
  	     ((gameBoard[0][0] == "O") &&
  	      (gameBoard[1][0] == "O") &&
  	      (gameBoard[2][0] == "O")) ||
  	     ((gameBoard[0][1] == "O") &&
  	      (gameBoard[1][1] == "O") &&
  	      (gameBoard[2][1] == "O")) ||
  	     ((gameBoard[0][2] == "O") &&
  	      (gameBoard[1][2] == "O") &&
  	      (gameBoard[2][2] == "O")) 
        )  // END COLUMNS
       )  || // END Y
       (   // START DIAGONALS
  	    (  // START LEFT 
  	     ((gameBoard[0][0] == "X") &&
  	      (gameBoard[1][1] == "X") &&
  	      (gameBoard[2][2] == "X")) ||
  	     ((gameBoard[0][0] == "O") &&
  	      (gameBoard[1][1] == "O") &&
  	      (gameBoard[2][2] == "O")) 
  	    ) || // END LEFT
        (  // START RIGHT
  	     ((gameBoard[0][2] == "X") &&
  	      (gameBoard[1][1] == "X") &&
  	      (gameBoard[2][0] == "X")) ||
  	     ((gameBoard[0][2] == "O") &&
  	      (gameBoard[1][1] == "O") &&
  	      (gameBoard[2][0] == "O")) 
         )
       ) // END DIAGONALS
     ) // CLOSE CONDITIONAL
  {
  	return true;
  } else {
  	return false;
  }
}
