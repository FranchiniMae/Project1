console.log("linked.");

$(document).ready(function () {
	//eventlistener on play click, do functions
	playButton();
	$('#restart').click(setBoard);

	//selecting elements use "this" for div elements

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
		// $("<div/>").addClass('r').appendTo('.row2');
		}
	}
	var gameBoard = $('#right').find('.cell');
	// $('.r6.c5').append('<div id="penguin"><img src="penguin.png"></div>');
	setFish(gameBoard);
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
	randomBox.innerHTML = "hello";
}


//SELECTING RANDOM NUMBER FOR ROW AND COLUMN
// var r = Math.round(Math.random() * 10);
// var c = Math.round(Math.random() * 10);
//input row and column into position
// addClass to random cell ("cell r'+ r + ' c' + c+'")
//$(" '.r' + r + ' .c' + c ").addClass('penguin')
// var newBox = $('.r' + r + '.c' + c);
//insert newBox into jquery selector so that it will grab that div and add the class 'fish'

//the penguin is at a random place
//if div has classof 'fish', reset







