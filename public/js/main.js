'use strict';

var activeVote = 0;

var userVotes = [];
var clickable = true;

/*** EVENT LISTENERS ***/
	


/*** END OF LISTENERS ***/

function filterVotes() {
	
	if (votes.length > 0) {
		votes = votes.filter(obj => obj.voted === false); 
	}
}

function initVoting() {
		clickable = true;
		boxOne.className = "imgBox one";
		boxTwo.className = "imgBox two";
}

function initResult() {
		clickable = false;
		boxOne.className = "imgBox resultOne";
		boxTwo.className = "imgBox resultTwo";
}



function updateUserProfile(vote) {

	var newVoteItem = {}

	newVoteItem.title = votes[activeVote].title;
	newVoteItem.opt1 = votes[activeVote].opt1;
	newVoteItem.opt2 = votes[activeVote].opt2;
	newVoteItem.vote = vote;

	userVotes.push(newVoteItem);
}

function getUserResults() {
	userVotes.forEach(function(el) {
		if (el.vote === 1) {
			console.log("You voted " + el.opt1.toUpperCase() + " over " + el.opt2);
		} else if (el.vote === 2) {
			console.log("You voted " + el.opt2.toUpperCase() + " over " + el.opt1);
		}
	})
}





// generateNewVote();