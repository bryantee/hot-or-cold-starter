
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
      if (sanitizeGuess(guess)) {
    		hotOrCold(compareGuess(guess, randomNumber));
    		$('ul#guessList').append('<li>' + guess + '</li>');
    		count += 1; // increment guess counter
    		$('#count').empty().append(count); //increment counter on page
        lastGuess = guess; // update global variable to keep track of the last guess
      }

  	});

  // ready? Go!
	newGame();

});

/*--- END OF DOCUMENT LOAD FUNCTION ---*/

/////////////////////////////////////////

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

var sanitizeGuess = function(guess) {
  if (guess === '') {
    alert("This is blank");
    return false;
  }
  else if (isNaN(parseInt(guess))){
    alert("Not a number");
    return false;
  }
  else if (guess <= 0){ 
    return false;
  }
  else if (guess >= 100) {
    return false;
  }
  else {
    return true;
  }
}

// takes the difference as argument, determines hot, cold or correct
var hotOrCold = function(difference){
  var output = ''
  console.log(output);

	if (difference === 0) {
		//return 'Win!';
    output += 'Win!';
	}
	else if (difference <= 5) {
		//return 'Blazin\'!';
    output += 'Blazin';
	}
	else if (difference <= 25) {
		output += 'Hot!';

	}
	else if (difference <= 50) {
		output += 'Warm...';
	}
	else if (difference >= 51) {
		output += 'You\'re as cold as ice...';
	}
	else {
		output += 'Cold!';
	}
  console.log(output);

  if (count >= 1) {
    var lastDifference = compareGuess(lastGuess, randomNumber);
    var currentDifference = difference;
    
    /*--- FOR TESTING ---*/
    //console.log('Current Difference: ' + currentDifference);
    //console.log('Last Difference: ' + lastDifference);
    output += ' | ';

    if (difference === 0) {
      output += 'Good Job!';
    }
    else if (currentDifference <= lastDifference) {
      output += 'Getting warmer...';
    }
    else {
      output += 'Getting colder...';
    }
  }
$('h2#feedback').empty().append(output);
}





