function drawGraphs() {
	clickable = false;
	boxOne.innerHTML = Math.round(votes[activeVote].votes1 * calculatePercent()) + "%";
	boxTwo.innerHTML = Math.round(votes[activeVote].votes2 * calculatePercent()) + "%";

	boxOne.className = "imgBox resultOne";
	boxTwo.className = "imgBox resultTwo";
	skipButton.innerHTML = "Next Vote";
	
}

function calculatePercent() {
	return 100 / (votes[activeVote].votes1 + votes[activeVote].votes2);

	
}