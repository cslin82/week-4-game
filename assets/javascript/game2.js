// (Global) Variables

var currentScore;
var targetScore;
var crystalValues = [];
var gameActive = false;
var wins = 0;
var losses = 0;



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
    currentScore = 0;
    targetScore = randomInt(19, 120);
    $('#target-score').text(targetScore);
    $('#current-score').text(currentScore);
    $('#status-display').html('&nbsp;')
}
    
// jQuery main
$(document).ready(function() {

    console.log( "ready!" );

    $('#start-game').click(function() {
        resetGame();
    });

    $('.crystal').click(function() {
        // console.log('crystal score this-attr-value: ' + $(this).attr("value"));
        // console.log('crystal score array: ' + crystalValues[$(this).attr("array-index")]);
        // console.log('currentScore: ' + currentScore);
        
        if (gameActive) {
            currentScore += crystalValues[$(this).attr("array-index")];
            $('#current-score').text(currentScore);
            
            if (currentScore === targetScore) {
                wins++;
                // alert('win');
                $('#status-display').text('You win!')
                $('#span-wins').text(wins);
                gameActive = false;
                
            } else if (currentScore > targetScore) {
                losses++;
                // alert('loss');
                $('#status-display').text('You lost!')
                $('#span-losses').text(losses);
                gameActive = false;
            }
        } else {
            resetGame();
            gameActive = true;
        }


    });

    $('.crystal-image').click(function() {
        alert('image clicked');

    });




});
