
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

  	/*-- Take Guess from user input on button click ---*/
    // This anonymous function needs to be broken up into smaller functions
    // ran into issues with variable scope when tried so left for now
  	$("#guessButton").click(function() {
  		var guess = $('#userGuess').val();
  		var printResults = hotOrCold(compareGuess(guess, randomNumber));
  		console.log(printResults);
  		// give feedback in the #feedback area
  		// but first clear the existing text
  		$('h2#feedback').empty().append(printResults);
  		$('ul#guessList').append('<li>' + guess + '</li>');
  		// check count, if greater than 0,
      // run this second hotOrCold function
      if (count >= 1) {
        var printAdditionalFeedback = hotOrCold2(compareGuess(guess, randomNumber));
        console.log(printAdditionalFeedback);
        $('h2#feedback').append(' | ' + printAdditionalFeedback);
      };
  		count += 1; // increment guess counter
  		$('#count').empty().append(count); //increment counter on page
      lastGuess = guess; // update global variable to keep track of the last guess

  	});

  // ready? Go!
	newGame();

});

/*--- VARIABLES --*/

var count = 0; // guess count
var lastGuess; // uesed to keep track of user's last guess

/*--- FUNCTIONS --*/

// sets up game by calling setRandomNumber()
// and printing to console
var newGame = function(){
	randomNumber = setRandomNumber(1, 100);
  	console.log('Random number is: ' + randomNumber + '\n Shhhhhhh....');
  	$('ul#guessList > li').remove(); // remove all guesses from #guessList
  	count = 0; // Reset count and update HTML to 0
  	$('#count').empty().append('0');	
  	$('h2#feedback').empty().append('Make Your Guess!'); // change #feedback back to 'Make your guess!'
    $('#userGuess').val(''); // reset input place holder

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

// alternate take on the logic
// use for guesses after the first guess
// compares current guess to last guess for relative feedback
var hotOrCold2 = function(difference){
  var lastDifference = compareGuess(lastGuess, randomNumber);
  var currentDifference = difference;
  
  /*--- FOR TESTING ---*/
  //console.log('Current Difference: ' + currentDifference);
  //console.log('Last Difference: ' + lastDifference);
  
  if (difference === 0) {
    return 'Good Job!';
  }
  else if (currentDifference <= lastDifference) {
    return 'Getting warmer...';
  }
  else {
    return 'Getting colder...';
  }
};





