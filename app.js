console.log("linked.");

//setBoard by having a canvas pop up
//grab player element and pin at random spot on canvas
//grab target element and pin at random spot on canvas
//create a timer to count down from 45 seconds
//add keyboard event listener to character

$(document).ready(function () {
	console.log("ready!");
	
	$('#player').click(function(){
    $('div.selected').removeClass('selected');
    $(this).addClass('selected');

	});}).keyup(function(e){
        var div = $('div.selected');
        // console.log(div);
        // console.log(e.which);            
        switch (e.which) {
    case 37:
        $(div).stop().animate({
            left: '-=75'
        }); //left arrow key
        break;
    case 38:
        $(div).stop().animate({
            top: '-=75'
        }); //up arrow key
        break;
    case 39:
        $(div).stop().animate({
            left: '+=75'
        }); //right arrow key
        break;
    case 40:
        $(div).stop().animate({
            top: '+=75'
        }); //bottom arrow key
        break;
//start timer when you start game
}
});

//Navigate

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




// // Monster image
// var monsterReady = false;
// var monsterImage = new Image();
// monsterImage.onload = function () {
// 	monsterReady = true;
// };
// monsterImage.src = "images/monster.png";
// }

// function navigate() {
// 	if 
// }