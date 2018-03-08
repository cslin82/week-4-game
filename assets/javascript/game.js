// (Global) Variables

var currentScore;
var targetScore;

var crystal1;
var crystal2;
var crystal3;
var crystal4;

var crystalValues = [];

// $('.crystal')

// jQuery objects



// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}


function updateGameBoard() {
    
}


$( document ).ready(function() {


    console.log( "ready!" );
    // rest of jQuery action goes here

    var crystal1 = $('#crystal-1');
    var crystal2 = $('#crystal-2');
    var crystal3 = $('#crystal-3');
    var crystal4 = $('#crystal-4');
    



    $('.crystal').click(function() {
        // this is going to not randomize upon click, of course
        console.log('crystal score: ' + $(this).val());
    });
        
    $('#target-score').click(function() {
        $(this).text(randomInt(19, 120));   
    });


    function resetGame() {
        crystal1.val(randomInt(1, 12));
        crystal2.val(randomInt(1, 12));
        crystal3.val(randomInt(1, 12));
        crystal4.val(randomInt(1, 12));
        // crystal1Value = randomInt(1, 12);
        // crystal2Value = randomInt(1, 12);
        // crystal3Value = randomInt(1, 12);
        // crystal4Value = randomInt(1, 12);
        targetScore = randomInt(19, 120);
    }
    

    $('#start-game').click(function() {
        resetGame();

    });



});