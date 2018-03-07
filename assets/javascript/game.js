// (Global) Variables

var currentScore;
var targetScore;

var crystal1Value;
var crystal2Value;
var crystal3Value;
var crystal4Value;

var crystalValues = [];

// $('.crystal')

// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}

$( document ).ready(function() {


    console.log( "ready!" );
    // rest of jQuery action goes here
    $('.crystal').click(function() {
        // this is going to not randomize upon click, of course
        console.log('crystal score: ' + randomInt(1, 12));
    });
        
    $('#target-score').click(function() {
        $(this).text(randomInt(19, 120));   
    });






});