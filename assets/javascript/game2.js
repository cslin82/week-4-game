// (Global) Variables

var currentScore;
var targetScore;
var crystalValues = [];

// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}

crystalValues.length = 4;
// crystalValues.fill(0);

function resetGame() {
    // Fill crystalValues with random from 1 to 12
    // could probably use something fancier like map or foreach
    for (let i = 0; i < crystalValues.length; i++) {
        crystalValues[i] = randomInt(1, 12);    
    }
}
    
// jQuery main
$(document).ready(function() {

    console.log( "ready!" );

    $('#target-score').click(function() {
        $(this).text(randomInt(19, 120));   
    });

    $('#start-game').click(function() {
        resetGame();
    });

    $('.crystal').click(function() {
        // console.log('crystal score this-attr-value: ' + $(this).attr("value"));
        console.log('crystal score array: ' + crystalValues[$(this).attr("array-index")]);
    });
});