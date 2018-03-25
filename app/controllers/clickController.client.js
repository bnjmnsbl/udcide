"use strict";

var votes = [];

	var boxOne = document.querySelector('.one');
	var boxTwo = document.querySelector('.two');
	var skipButton = document.querySelector('.btn-skip');
	var resultButton = document.querySelector('.btn-results');


(function () {


	var apiUrl = "http://localhost:3000/api/getVotes";


	function ready (fn) {

		if (typeof fn !== "function") {
			return
		}

		if (document.readyState === "complete") {
			console.log("ready complete");
			return fn();
		}
		console.log("waiting for finish");
		document.addEventListener("DOMContentLoaded", fn, false);
	}

	function ajaxRequest (method, url, callback, data) {
		var xmlhttp = new XMLHttpRequest();

		
		xmlhttp.onreadystatechange = function() {
			
			console.log("ReadyState: " + xmlhttp.readyState)
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				callback(xmlhttp.response) // > this is "data" for voteDBtoAPI func 
			}
		};
		xmlhttp.open(method, url, true);
		
		xmlhttp.setRequestHeader("Content-type", "application/json");

		if (data) {
			console.log("Sending Data");
			xmlhttp.send(JSON.stringify(data));
		}
		 
		else {
			console.log("Sending empty");
			xmlhttp.send();
		}
	
	}
	
	testButton.addEventListener("click", function() {
		
		ajaxRequest("DELETE", apiUrl, function() {
			console.log("DELETE done");
		})
	})

	boxOne.addEventListener('click', function() {
	if (clickable) return voteClick(1);
	});

	boxTwo.addEventListener('click', function() {
		if (clickable) return voteClick(2);
	});

	skipButton.addEventListener('click', function() {
		return generateNewVote();
	});

	resultButton.addEventListener('click', function() {
		return getUserResults();
	});

	
	function voteClick(vote) {
	
		votes[activeVote]["votes" + vote] += 1;
		votes[activeVote].voted = true;

		updateUserProfile(vote);	
		ajaxRequest("POST", apiUrl, updateVotesinAPI, votes[activeVote]);
		drawGraphs();

	}
	
	function noMoreVotes() {
	
		console.log("No more votes! Restarting...");
		
		ajaxRequest("GET", apiUrl, voteDBtoAPI);
	}

	function generateNewVote() {
	
	if (votes.length > 1) {
		initVoting();
		filterVotes();
		
		var randomVote = Math.floor((Math.random() * votes.length));
		activeVote = randomVote;
		boxOne.innerHTML = votes[activeVote].opt1;
		boxTwo.innerHTML = votes[activeVote].opt2;
		skipButton.innerHTML = "Skip Vote";
		console.log("votes left: " + votes.length);
	}

		else { 
			initResult(); 
			noMoreVotes();
		}
	}

/*** API FUNCTIONS ***/
	function voteDBtoAPI (data) {	
		console.log("voteDBtoAPI");
		votes = JSON.parse(data);
		console.dir(votes);
		generateNewVote();

	}

	function updateVotesinAPI () {
		console.log("Writing to API");
		console.dir(votes);
	}
	/*** END API FUNCTIONS ***/

	ready(ajaxRequest("GET", apiUrl, voteDBtoAPI));

})();




