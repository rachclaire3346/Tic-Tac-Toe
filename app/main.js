//globals
var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;



//waits for page to load before doing interesting things
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame() {

	//restart turn counter
	turn = 0;

	//remove winner notification

	//clear board and add click event on squares
	for (var i = 0; i < spaces.length; i++) {
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	}

}

function takeSpace() {



	turn++;
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click", takeSpace);

	for (var i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			alert("Winner, Winner!");
		}
	}

}

function checkForWin(winArray) {
 
	return spaces[winArray[0]] !== '' &&
		spaces[winArray[0]] === spaces[winArray[1]] &&
		spaces[winArray[0]] === spaces[winArray[2]];

}












