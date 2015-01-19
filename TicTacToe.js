// - mikeNauman --


window.onload = main;

var whosTurn = "X";


function main() {
  // Start game listener
  console.log(whosTurn); 
  document.getElementById("myStartButton").addEventListener("click", startGame);
}

function startGame() {
  //---------------------------------------
  // get a list of all the game squares
  var mySquares = document.getElementsByClassName("mySquare");
  console.log(mySquares.length);
  console.log(mySquares);

  // Assign listener to the game squares "mySquares[j]"" 
  // for(var j = 1; j < mySquares.length; j++) {
  //   mySquares[j].addEventListener("click", oneTurn);
  // }

  // TODO: work around for the for loop above
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
  console.log("whosTurn :" + whosTurn);
  // change image
  event.target.setAttribute("src", "./images/" + whosTurn + ".jpeg");
  


  var test2 = event.target.querySelector("id");
  console.log("I am test2 " + test2);

  var myID = event.target.getAttribute("id");  
  console.log("This should be the button id: " + myID);



  // checks to see if the last click won the game
  checkIfWinner();

  if (whosTurn == "X") {
  	whosTurn = "O";
  	console.log("whosTurn (O):" + whosTurn);
    return "O"; 
  } else {
    whosTurn = "X";
  	console.log("whosTurn (X):" + whosTurn);
    return "X";
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
