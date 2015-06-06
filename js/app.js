
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

  	/*-- Take Guess from Field on button click ---*/
  	$("#guessButton").click(function() {
  		var guess = $('#userGuess').val();
  		var printResults = hotOrCold(compareGuess(guess, randomNumber));
  		console.log(printResults);
  	});

  	// Testing random number
  	// remove before production
	newGame();



});

/*--- FUNCTIONS --*/

// sets up game by calling setRandomNumber()
// and printing to console
var newGame = function(){
	randomNumber = setRandomNumber(1, 100);
  	console.log('Random number is: ' + randomNumber + '\n Shhhhhhh....');
}
// Sets the number between 1 and 100
var setRandomNumber = function(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

// finds the difference between the guess and the random number
var compareGuess = function(guess, number){
	var difference = Math.abs(guess - number);
	return difference;
}

// takes the difference as argument, determines hot, cold or correct
var hotOrCold = function(difference){
	if (difference === 0) {
		return 'Win!';
	}
	else if (difference <= 25) {
		return 'Hot!';
	}
	else {
		return 'Cold!';
	}
}





