console.log("linked.");
var score = 0;
var newScore = 0;


$(document).ready(function () {
	var fishPosition;
		// var playerPosition=$('#player').position();
	playButton();
	$('#restart').click(setBoard);
});
var gameBoard;

//FIND PENGUIN POSITION
function findPenguin() {
	var player = $('#player');
		playerPosition = player.position();
	// console.log(playerPosition);
	eatFish();
}

$(document).keydown(function (e) {
	var player = $("#player");
	if (e.keyCode == 37) {
		player.animate({"left": "-=50px"}, 
						"fast",findPenguin);
		}
	else if (e.keyCode == 39) {
		player.animate( {
			"left": "+=50px"}, "fast",findPenguin);
		}
	else if (e.keyCode == 38) {
	player.animate( {
		"top": "-=50px"}, "fast",findPenguin);
		}
	else if (e.keyCode == 40) {
		player.animate( {
			"top": "+=50px"}, "fast",findPenguin);
		}
});

//SET PLAY BUTTON FUNCTION

function playButton () {	
	$('#play').click(setBoard);
	playerPosition=$('#player').position();
}

//SET TIMER

function setTimer() {
	var count = document.getElementById('countdown');
	timeoutclock = function(){
	       count.innerHTML = parseInt(count.innerHTML) - 1;
	       timer = setTimeout(timeoutclock, 1000);
	       if (count.innerHTML === "0") {
	       	clearTimeout(timer);
	       	alert("TIME OUT!");
	       	$('#right').empty();
	     }
	};
	setTimeout(timeoutclock, 1000);
}

//SET BOARD FUNCTION

function setBoard() {
	setTimer();
	for (var i=1; i <= 10; i++) {
		for (var j=1; j <= 10; j++) {
		$('#right').append('<div id="'+i+j+'" class="cell r'+ i + ' c' + j+'""></div>');
		}
	}
	gameBoard = $('#right').find('.cell');
	// var randomBox = gameBoard[randomCell()];
	setFish(gameBoard);
	eatFish();
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
	fishPosition = $('#' + newId).position();
	console.log(fishPosition);
	randomBox.innerHTML = "<img width='35' height='35' src ='fish.png'>";
}

//EAT FISH FUNCTION

function eatFish() {
	var playerLeft=playerPosition.left,
		playerTop=playerPosition.top,
		fishLeft=fishPosition.left,
		fishTop=fishPosition.top;
	if (playerLeft===fishLeft && playerTop===fishTop){
		newScore+= 1;
		$('#totalScore').html(newScore);
		console.log("yummy fish");
		removeFish();
		setFish(gameBoard);
	}
}

//REMOVE FISH FUNCTION

 function removeFish () {
//grab randomBox variable (because it has the randomBox contents)
	var gameBoard = $('#right').find('.cell');
	$('.cell').html('');
//get it's HTML and set it equal to ""
 }



