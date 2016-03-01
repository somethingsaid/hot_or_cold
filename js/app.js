$(document).ready(function(){
    newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User clicks new game ---*/
    $("a.new").click(function() {
    	newGame();
    });

  	/*--- Getting user's guess when they click Guess button ---*/
  	$("#guessButton").click(function(e) {
  		e.preventDefault(); 
  		    //without this line, page refreshes when user clicks 
  		    //Guess button
  		userGuess = +$("#userGuess").val();
  		console.log("user\'s guess is: " + userGuess);
  		$("#feedback").text(validateGuess(userGuess));
  	});
});
/*--- Initialize global variables ---*/
/*--- this block onwards might have to move to the top of file ---*/
var secretNum = 0;
var guessCount = 0;
var userGuess = 0;
var lastDifference = 0;
var feedback = '';

/*--- Functions ---*/
// Generate random number between 1 and 100 (inclusive)
function setSecretNum() {
	secretNum = Math.floor(Math.random() * (100)) + 1;
}

// Starting a new game
function newGame() {
	// reset global variables
	setSecretNum();
	guessCount = 0;
	lastDifference = 0;
	feedback = '';

	// reset fields and prompts
	document.getElementById("guessButton").disabled = false;
    document.getElementById("userGuess").disabled = false;
    document.getElementById('feedback').innerHTML = 'Make your Guess!';
    document.getElementById('count').innerHTML = guessCount;

	// details used for debugging
	console.log("******************\nStarting new game\n******************");
	console.log("New random number: " + secretNum);
	console.log("Guess count reset to: " + guessCount);
	console.log("Feedback reset to: " + feedback);
	console.log("Last difference reset to: " + lastDifference);
}

// Perform check on user guess
function validateGuess(guess) {
	// Invalid guesses
    if ((isNaN(guess)) || (guess % 1 > 0) || (guess <= 0)) {
        feedback = "Enter positive integers only.";
    }
    // Check valid guesses
    else {
    	// First guess of the game
    	if (lastDifference == 0) {
    		console.log("first guess!");
    	    lastDifference = Math.abs(secretNum - guess);
    	    if (lastDifference > 50) {
    	    	feedback = 'Ice Cold.';
    	    }
    	    else if (lastDifference > 25) {
    	    	feedback = 'Cold.';
    	    }
    	    else if (lastDifference > 15) {
    	    	feedback = 'Warm.';
    	    }
    	    else if (lastDifference > 0) {
    	    	feedback ='Hot.';
    	    }
    	    else {
    	    	feedback = 'Got it on the first try! Click NEW GAME to play again.';
    	    	endGame();
    	    }
    	}
    	// Subsequent guesses

    	else {
    	    if (Math.abs(secretNum - guess) > lastDifference) { 
    	        feedback = 'Colder.';
    	        lastDifference = Math.abs(secretNum - guess);
    	    }
    	    else if (Math.abs(secretNum - guess) > 0) {
    	    	feedback = 'Hotter.';
    	        lastDifference = Math.abs(secretNum - guess);
    	    }
    	    else {
    	    	feedback = 'You got it! Click NEW GAME to play again.';
    	    	endGame();
    	    }

    	}
    }

    // Advance guess count regardless of invalid guesses
    guessCount += 1;
    document.getElementById("count").innerHTML = guessCount;
    return feedback;
}

function endGame() {
    // Disable guess and input fields
    document.getElementById("guessButton").disabled = true;
    document.getElementById("userGuess").disabled = true;
}
