console.log("linked.");


$(document).ready(function () {
	console.log("ready!");
	//eventlistener on play click, do functions
	// setTimer();
	// setBoard();
	playButton();


	//selecting elements use this for div elements

});

//SET BOARD FUNCTION
//create board array to iterate through 3
//add class to element to grab it later on
//append it to the row
function setBoard() {
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


//set Timer
function setTimer() {
var count = document.getElementById('countdown');
timeoutfn = function(){
       count.innerHTML = parseInt(count.innerHTML) - 1;
       timer = setTimeout(timeoutfn, 1000);
       if (count.innerHTML === "0") {
       	clearTimeout(timer);
     }
};
setTimeout(timeoutfn, 1000);
}

