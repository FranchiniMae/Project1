console.log("linked.");

$(document).ready(function () {
	playButton();
});

//GLOBAL VARIABLES

var gameBoard;
var newScore = 0;

// FIND PENGUIN POSITION

function findPenguin() { 
	// on findPenguin, calculate playerPosition
	var player = $('#player');
		playerPosition = player.position();
	// once playerPosition has been found, compare with fishPosition & holePosition
	// if playerPosition equals fishPosition, eatFish
	eatFish();
	//if playerPosition equals holePosition, penguin dies
	deadPeng();
}

//ARROW KEYS EVENT LISTENERS

$(document).on("keydown",function (e) {
	//Grab player div to control it with arrow keys
	var player = $("#player");
	//if left arrow key is pressed, move 50px
	//once complete, call findPenguin function
	if (e.keyCode == 37) {
		if (playerPosition.left <= 450 && playerPosition.left > 0) {
		player.animate({"left": "-=50px"}, 
						"fast",findPenguin);
		}
	}	
	//if right arrow key is pressed, move 50px
	else if (e.keyCode == 39) {
		if (playerPosition.left < 450 && playerPosition.left >= 0) {
		player.animate( {
			"left": "+=50px"}, "fast",findPenguin);
		}
	}

	//if up arrow key is pressed, move 50px
	else if (e.keyCode == 38) {
		if (playerPosition.top <= 450 && playerPosition.top > 0) {
		player.animate( {
			"top": "-=50px"}, "fast",findPenguin);
		}
	}

	//if down arreky is pressed, move 50px
	else if (e.keyCode == 40) {
		if (playerPosition.top < 450 && playerPosition.top >= 0) {
		player.animate( {
			"top": "+=50px"}, "fast",findPenguin);
		}
	}
});

//PREVENT PAGE SCROLL WHEN PLAYING

$(document).keydown(function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

//SET PLAY BUTTON FUNCTION

function playButton () {
	//when playButton is pressed, setBoard	
	$('#play').click(setBoard);
	playerPosition=$('#player').position();	
}

//SET TIMER

function setTimer() {
	var count = document.getElementById('countdown');
	var seconds = 20;
	timeoutclock = function(){
	       count.innerHTML = seconds + " secs";
	       seconds --;
	       timer = setTimeout(timeoutclock, 1000);
	       if ( seconds === -1) {
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
	setFish(gameBoard);
	setHole(gameBoard);
	eatFish();
	deadPeng();
}


//FUNCTION TO GRAB RANDOM CELL

function randomCell() {
	var box = Math.round(Math.random() *99);
	return box;
}

//SET FISH ON BOARD

function setFish(gameBoard) {
	var randomBox = gameBoard[randomCell()];
	var newId = randomBox.getAttribute('id');
	fishPosition = $('#' + newId).position();
	console.log(fishPosition);
	randomBox.innerHTML = "<img width='35' height='35' src ='images/fish.png'>";
}

//SET HOLE

function setHole(gameBoard) {
	var randomBox = gameBoard[randomCell()];
	var newId = randomBox.getAttribute('id');
	holePosition = $('#' + newId).position();
	console.log(holePosition);
	randomBox.innerHTML = "<img width='35' height='35' src ='hole.png'>";
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
		removeFish();
		setFish(gameBoard);
		setHole(gameBoard);
	}
}

//DEAD PENGUIN FUNCTION

function deadPeng() {
	var playerLeft=playerPosition.left,
		playerTop=playerPosition.top,
		holeLeft=holePosition.left,
		holeTop=holePosition.top;
	if (playerLeft===holeLeft && playerTop===holeTop){
		alert("GAME OVER!");
		clearTimeout(timer);
		count.innerHTML = 0;
	    $('#right').empty();
	}
}

//REMOVE FISH FUNCTION

 function removeFish () {
//grab randomBox variable (because it has the randomBox contents)
	var gameBoard = $('#right').find('.cell');
	$('.cell').html('');
}






