
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Getting user's guess when they click Guess button ---*/

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
	getNum();
	guessCount = 0;
	feedback = '';
	//details
}

// Get user input and perform hygiene check
function getGuess() {

}

// Generating feedback (Hot or Cold)
function feedback(answer, guess) {
    //if () {
    //}
}