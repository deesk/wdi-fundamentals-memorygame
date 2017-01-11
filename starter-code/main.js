alert("JS file is connected to HTML! Woo!");

// var cardOne= "queen";
// var cardTwo= "queen";
// var cardThree= "king";
// var cardFour= "king";

// if (cardOne === cardTwo) {
// 	alert('You found a match!');	
// } else {
//   alert('Sorry, try again.');
// }

var board= document.getElementById('game-board');
var totalCards= 4;

function createCards(){
	for(var i=0; i < totalCards; i++){
		var cards= document.createElement('div');
		cards.className ='card';
		board.appendChild(cards);
	}

};

createCards();


