
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
  		// give feedback in the #feedback area
  		// but first clear the existing text
  		$('h2#feedback').empty().append(printResults);
  		$('ul#guessList').append('<li>' + guess + '</li>');
  		// increase guess counter
  		count += 1;
  		$('#count').empty().append(count);
  	});

	newGame();



});

/*--- VARIABLES --*/

var count = 0;

/*--- FUNCTIONS --*/

// sets up game by calling setRandomNumber()
// and printing to console
var newGame = function(){
	randomNumber = setRandomNumber(1, 100);
  	console.log('Random number is: ' + randomNumber + '\n Shhhhhhh....');
  	// remove all guesses from #guessList
  	$('ul#guessList > li').remove();
  	// Reset count and update HTML to 0
  	count = 0;
  	$('#count').empty().append('0');
  	// change #feedback back to 'Make your guess!'
  	$('h2#feedback').empty().append('Make Your Guess!');

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
	else if (difference <= 5) {
		return 'Blazin\'!';
	}
	else if (difference <= 25) {
		return 'Hot!';
	}
	else if (difference <= 50) {
		return 'Warm...';
	}
	else if (difference >= 51) {
		return 'You\'re as cold as ice...';
	}
	else {
		return 'Cold!';
	}
}





