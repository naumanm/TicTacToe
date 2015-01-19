// - mikeNauman --

window.onload = main;

  var whosTurn = "X";
  var gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

function main() {
  // TODO: Should do a reset
  // resetGame();
  // Start game listener
  console.log(whosTurn); 
  document.getElementById("myStartButton").addEventListener("click", startGame);
}

function startGame() {
  for(var j = 1; j < 10; j++) {
    document.getElementById("p" + j).addEventListener("click", oneTurn);
  }
}

//---------------------------------------
// 
function oneTurn () {
  var myID = this.id;  
  event.target.setAttribute("src", "./images/" + whosTurn + ".jpeg");
  this.setAttribute("class", whosTurn);

  console.log(checkIfWinner(myID));

  if (whosTurn == "X") {
  	whosTurn = "O";
  } else {
    whosTurn = "X";
  } 
}

//---------------------------------------
// 
function checkIfWinner (cellID) {
  var winner = false;

  // set the cellID to whosTurn

  console.log("my cell Id: "); 
  console.log(cellID); 
  console.log(gameBoard); 

  // not the right way to do this

  // for(var i = 1; i < 10; i++) {
  //   if (cellID = "p1") {
  //     gameBoard[0][0] = "X";
  //   }
  // }
  
  if (cellID == "p1" ) {gameBoard[0][0] = whosTurn;}
  if (cellID == "p2" ) {gameBoard[0][1] = whosTurn;}
  if (cellID == "p3" ) {gameBoard[0][2] = whosTurn;}
  if (cellID == "p4" ) {gameBoard[1][0] = whosTurn;}
  if (cellID == "p5" ) {gameBoard[1][1] = whosTurn;}
  if (cellID == "p6" ) {gameBoard[1][2] = whosTurn;}
  if (cellID == "p7" ) {gameBoard[2][0] = whosTurn;}
  if (cellID == "p8" ) {gameBoard[2][1] = whosTurn;}
  if (cellID == "p9" ) {gameBoard[2][2] = whosTurn;}
  
 

  if (
       (  	  
  	    ((p1 = "X") && (p2 = "X") && (p3 = "X")) &&
        ((p4 = "X") && (p5 = "X") && (p6 = "X")) &&
        ((p7 = "X") && (p8 = "X") && (p9 = "X"))
       ) &&
       (
  	    ((p1 = "X") && (p4 = "X") && (p7 = "X")) &&
        ((p2 = "X") && (p5 = "X") && (p8 = "X")) &&
        ((p3 = "X") && (p6 = "X") && (p9 = "X"))
       )
     )  
  {
    console.log("there is a winner!");
  }


}





