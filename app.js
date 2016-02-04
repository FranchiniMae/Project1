console.log("linked.");


$(document).ready(function () {
	//eventlistener on play click, do functions
	playButton();
	$('#restart').click(setBoard);
	//selecting elements use "this" for div elements

});


// $(document).keydown(function (e) {
// 	if (e.keyCode > 36 && e.keyCode < 41)
// 	console.log(e.keyCode);
// });

// $(document).keydown(function (e) {
// 	var player = $("#player");
// 	if (e.keyCode === 37) {
// 		player.animate( {
// 			"left": "-=50px"}, "slow");
// 		}
// });


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
	$('.r5.c6').append("<img src='penguin.png'>");
	var gameBoard = $('#right').find('.cell');
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
	randomBox.innerHTML = "<img width='35' height='35' src ='fish.png'>";
}

//EATFISH FUNCTION
function eatFish() {
	var randomBox = gameBoard[randomCell()];
	//need gameboard
	var gameBoard = $('#right').find('.cell');
	//need penguin
	var penguin = $('.r5.c6');
	//need penguin start & penguin end
	var pstart  = gameBoard[45];
	//need to store penguin in temporary variable
	var pengHome = pstart;
	//erase penguin start
	pstart.innerHTML = "";
	//need append temporary variable to penguin end 
	$('#player').append(randomBox);
}

//need to get the location of the penguin
//penguin[p] to penguin[p - 3]


//this is for selector function
//the penguin is at a random place
//if div has classof 'fish', reset







