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

//SELECTOR FUNCTION
//Player will be the selector hover overlay
//when fish is selected, score increases

//HOW TO SELECT
//grab element & use selector css 
// function getThrough() {
// 	var position = { x: 0, y:0};
// 	var iceLand = [];

// 	$('.board').each(function () {
// 		iceLand.push([]);
// 		$('.#ight').
// 	});


// }

//SET FISH ON BOARD

