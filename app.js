console.log("linked.");

//setBoard by having a canvas pop up
//grab player element and pin at random spot on canvas
//grab target element and pin at random spot on canvas
//create a timer to count down from 45 seconds
//add keyboard event listener to character

$(document).ready(function () {
	console.log("ready!");
	setTimer();
});


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



// function navigate() {
// 	if 
// }