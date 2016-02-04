console.log("linked.");

$(document).ready(function () {
	//eventlistener on play click, do functions
	playButton();
	$('#restart').click(setBoard);
	//selecting elements use "this" for div elements

});

$(document).keydown(function (e) {
	var player = $("#player");
	if (e.keyCode == 37) {
		player.animate( {
			"left": "-=50px"}, "slow");
		}
	else if (e.keyCode == 39) {
		player.animate( {
			"left": "+=50px"}, "slow");
		}
	else if (e.keyCode == 38) {
	player.animate( {
		"top": "-=50px"}, "slow");
		}
	else if (e.keyCode == 40) {
		player.animate( {
			"top": "+=50px"}, "slow");
		}
});


//SET BOARD FUNCTION
//create board array to iterate through 3
//add class to element to grab it later on
//append it to the row
function setBoard() {
	setTimer();
	for (var i=1; i <= 10; i++) {
		for (var j=1; j <= 10; j++) {
		$('#right').append('<div class="cell r'+ i + ' c' + j+'""></div>');
		}
	}
	var gameBoard = $('#right').find('.cell');
	// return gameBoard;
	setFish(gameBoard);
	findFishPosition();
}

//SET PLAY BUTTON FUNCTION
//grab play button and bind it to add event listener (click)
function playButton () {	
	$('#play').click(setBoard);
}
//when clicked initiate set board function


//SET TIMER
function setTimer() {
var count = document.getElementById('countdown');
timeoutclock = function(){
       count.innerHTML = parseInt(count.innerHTML) - 1;
       timer = setTimeout(timeoutclock, 1000);
       if (count.innerHTML === "0") {
       	clearTimeout(timer);
     }
};
setTimeout(timeoutclock, 1000);
}

function randomCell() {
	var box = Math.round(Math.random() *99);
	return box;
}

//SET FISH ON BOARD
function setFish(gameBoard) {
	// var gameBoard = $('#right').find(".cell");
	var randomBox = gameBoard[randomCell()];
	randomBox.innerHTML = "<img width='35' height='35' src ='fish.png'>";
}

// //EATFISH FUNCTION
// function eatFishNULL() {
// 	var randomBox = gameBoard[randomCell()];
// 	//need gameboard
// 	var gameBoard = $('#right').find('.cell');
// 	//need penguin
// 	var penguin = $('.r5.c6');
// 	//need penguin start & penguin end
// 	var pstart  = gameBoard[45];
// 	//need to store penguin in temporary variable
// 	var pengHome = pstart;
// 	//erase penguin start
// 	pstart.innerHTML = "";
// 	//need append temporary variable to penguin end 
// 	$('#player').append(randomBox);
// }

//ALTERNATE EATFISH FUNCTION
function eatFish() {
//OBJ: when penguin img hits (or overlaps) fish, clear fish and add point
//first, find position of the fish
//how do I get this linked to the random position generated in setFish
console.log(fishPosotion);
//set fish position to variable
//second, find position of penguin
//set penguin position to variable
var player= $('#player');
var playerPosition = player.position();
//if fish position === penguin position, clear fish
//if playertop === fishtop && playerleft === fishleft
//maybe resest board add point  

//look up .position jquery

}

function findFishPosition() {
//go through the gameBoard array
var gameBoard = $('#right').find('.cell');
	for(var i =0; i < gameBoard.length; i++) {
//find if any divs have the fish in it
	if (gameBoard[i].innerHTML !== "") {
//if so, console log the position of that gameBoard
		var fishHere = gameBoard[i];
		console.log(gameBoard[i].attr("class"));
		// console.log(fishHere.attr('class'));
		//once you get class
		//take class put in variable
		//find position with that variable
		console.log(fishHere);
		// console.log(gameBoard[i]);
		//gameBoard[i] is not recognized as a div
		//how can I get it to recognize it as div
		console.log("hi");
		}
	}	
}



// '<img width="35" height="35" src ="fish.png">'