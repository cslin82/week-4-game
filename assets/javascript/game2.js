// (Global) Variables

var currentScore;
var targetScore;
var crystalValues = [];

// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}

// Fill crystalValues with random from 1 to 12
crystalValues.length = 4;
// crystalValues.fill(0);

for (let i = 0; i < crystalValues.length; i++) {
    crystalValues[i] = randomInt(1, 12);    
}

