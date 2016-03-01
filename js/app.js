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
	feedback = '';
	//details
	console.log("Starting new game");
	console.log("New random number: " + secretNum);
	console.log("Guess count reset to: " + guessCount);
	console.log("Feedback reset to: " + feedback);
}

// Perform check on user guess
function validateGuess(guess) {
    if ((isNaN(guess)) || (guess % 1 > 0) || (guess <= 0)) {
        feedback = "Enter positive integers only";
    }
    else {
    	feedback = "OK";
    }
    return feedback;
}

// Generating feedback (Hot or Cold)
function feedback(answer, guess) {
    //if () {
    //}
}