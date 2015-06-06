
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- New Game ---*/
  	$(".new").click(function() {
  		console.log('New game starting!');
  		newGame();
  	});

  	// Testing random number
  	// remove before production
	newGame();

});

var newGame = function(){
	var randomNumber = setRandomNumber(1, 100);
  	console.log('Random number is: ' + randomNumber + '\n Shhhhhhh....');
}

var setRandomNumber = function(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}





