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

function setBoard() {
	setTimer();
	for (var i=1; i <= 10; i++) {
		for (var j=1; j <= 10; j++) {
		$('#right').append('<div id="'+i+j+'" class="cell r'+ i + ' c' + j+'""></div>');
		}
	}
	var gameBoard = $('#right').find('.cell');
	// return gameBoard;
	setFish(gameBoard);
}

//SET PLAY BUTTON FUNCTION

function playButton () {	
	$('#play').click(setBoard);
}

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

//FUNCTION TO GRAB RANDOM CELL

function randomCell() {
	var box = Math.round(Math.random() *99);
	return box;
}

//SET FISH ON BOARD

function setFish(gameBoard) {
	// var gameBoard = $('#right').find(".cell");
	var randomBox = gameBoard[randomCell()];
	//use randomBox to grab div ID & position of fish
	var newId = randomBox.getAttribute('id');
	var fishPosition = $('#' + newId).position();
	console.log(fishPosition);
	randomBox.innerHTML = "<img width='35' height='35' src ='fish.png'>";
}

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



// '<img width="35" height="35" src ="fish.png">'